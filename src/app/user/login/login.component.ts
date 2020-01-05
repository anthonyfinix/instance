import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { GlobalErrorHandler } from 'src/app/core/services/global-error-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loading:Boolean = false;
  
  loginForm = new FormGroup({
    "email": new FormControl('', Validators.email),
    "password": new FormControl('', Validators.required),
  })

  constructor(
    private authSer: AuthenticationService,
    private router: Router,
    private errHandle: GlobalErrorHandler
  ) {
    if (this.authSer) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
  }

  
  onLogin(){
    this.loading = true;
    this.authSer.login(this.loginForm.get('email').value,this.loginForm.get('password').value).finally(()=>{
      this.loading = false;
        this.router.navigate(['/'])
    }).catch(error=>{
      this.errHandle.handleError(error);
    });
  }

}
