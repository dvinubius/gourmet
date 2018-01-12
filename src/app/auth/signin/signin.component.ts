import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  entryPoint: string; // a URL : if redirected here because authentication was needed - where to go back after login?
  entryPointFragment: string;

  constructor(private authService: AuthService,
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
    this.authService.signinUser(email, password, this.entryPoint);
  }
}
