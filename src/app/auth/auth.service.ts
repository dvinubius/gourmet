import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;
  user: string;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch( error => console.log(error) );
  }

  signinUser(email: string, password: string, entryPoint: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then( resp => {
          firebase.auth().currentUser.getToken()
                .then( tk => this.token = tk);  // may be a valid token, or an expired one
          this.user = email;
          this.router.navigate([entryPoint], {preserveFragment: true});
         } )
        .catch( error => console.log(error) );
  }

  getToken() {
    // gets a token. if the currently stored token is expired, firebase requests a new one.
    firebase.auth().currentUser.getToken()
    .then( tkNew => {
      this.token = tkNew;
    });

    return this.token;
    // return with the current token. if it's expired,
    // then on a second attempt there will be a fresh one
    // coming from the call to firebase.auth, above
  }

  isAuthenticated() {
    return this.token != null;
  }

  getLoggedInUser() {
    return this.user;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['']);
  }
}
