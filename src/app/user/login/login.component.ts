import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

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
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  
  onLogin(){
    this.loading = true;
    this.userService.login(this.loginForm.get('email').value,this.loginForm.get('password').value).finally(()=>{
        this.loading = false;
    }).catch(error=>{
      console.log(error);
    });
  }

}
