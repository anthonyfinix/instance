import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {
    this.loginFormGroup = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    });
  }

  ngOnInit() {
    if (this.auth.user$) {
      this.router.navigate(['/']);
    }
  }

  onLoginSubmit() {
    this.auth.login(this.loginFormGroup.get('username').value, this.loginFormGroup.get('password').value)
    this.auth.progressBar.next(true)
  }
}
