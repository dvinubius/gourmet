import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.reducer';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  entryPoint: string; // a URL : if redirected here because authentication was needed - where to go back after login?

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.entryPoint = this.route.snapshot.queryParams['entryPoint'] || '';
  }

  onSignin(f: NgForm) {
    if (f.invalid) {
      return;
    }
    const email = f.value.email;
    const password = f.value.password;
    this.store.dispatch(new fromAuth.AttemptSignin({username: email, password: password, location: this.entryPoint}));
  }
}
