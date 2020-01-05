import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loading:Boolean = false;
  
  loginForm = new FormGroup({
    "email": new FormControl('', Validators.email),
    "password": new FormControl('', Validators.required),
  })

  constructor(
    private usrSer: UserService,
    private router: Router
  ) {
    if (this.usrSer) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
  }

  
  onLogin(){
    this.loading = true;
    this.usrSer.login(this.loginForm.get('email').value,this.loginForm.get('password').value).finally(()=>{
      this.loading = false;
        this.router.navigate(['/'])
    }).catch(error=>{
      console.log(error);
    });
  }

}
