import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as AuthActions from '../store/auth.reducer';
import * as firebase from 'firebase';
import {fromPromise} from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  attemptedLocation: string;

  // when ATTEMPT_SIGN_UP Action is detected, this @effect makes sure
  // that SIGN_UP and SET_TOKEN Actions will be dispatched
  @Effect()
  authSignup = this.actions$
      .ofType(AuthActions.ATTEMPT_SIGN_UP)
      .map((action: AuthActions.AttemptSignup) => {
        return action.payload;
      })
      .switchMap((authData: {username: string, password: string}) => {
        return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
      })
      .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
      })
      .mergeMap((token: string) => {
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGN_UP
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          },
          {
            type: AuthActions.SET_USER,
            payload: firebase.auth().currentUser.email
          }
        ];
      });

  @Effect()
  authSignin = this.actions$
      .ofType(AuthActions.ATTEMPT_SIGN_IN)
      .map((action: AuthActions.AttemptSignin) => {
        return action.payload;
      })
      .switchMap((authData: {username: string, password: string, location: string}) => {
        this.attemptedLocation = authData.location;
        return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
      })
      .switchMap(() => {
        return fromPromise(firebase.auth().currentUser.getIdToken());
      })
      .mergeMap((token: string) => {
        this.router.navigate([this.attemptedLocation], {preserveFragment: true});
        return [
          {
            type: AuthActions.SIGN_IN
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          },
          {
            type: AuthActions.SET_USER,
            payload: firebase.auth().currentUser.email
          }
        ];
      });

  @Effect({dispatch: false})
  authSignout = this.actions$
    .ofType(AuthActions.SIGN_OUT)
    .do(() => {
      this.router.navigate(['/']);
    });

  constructor(private actions$: Actions, private router: Router) {
  }
}
