import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSignup(f: NgForm) {
    if (f.invalid) {
      return;
    }
    const email = f.value.email;
    const password = f.value.password;
    this.store.dispatch(new AuthActions.AttemptSignup({username: email, password: password}));
  }
}
