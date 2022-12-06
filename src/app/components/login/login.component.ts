import { Component, NgModule, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login', 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm= new FormGroup({
    email: new FormControl('', [Validators.email]),
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })
  loginUser()
    {
      console.warn(this.loginForm)
    }
  
    get user()
    {
      return this.loginForm.get('user');
    }
    
    get email()
    {
      return this.loginForm.get('email');
    }

    get password()
    {
      return this.loginForm.get('password');
    }
  constructor() { }
  
 

  ngOnInit(): void {}
 
}

    


