import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  email2 = '';
  password = '';
  password2 = '';
  username = '';
  firstName= '';
  lastName = '';
  phone = undefined;
  emailBlank: boolean = false;
  emailError: boolean = false;
  passwordBlank: boolean = false;
  passwordError: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  register(): void {
    this.emailBlank = false;
    this.emailError = false;
    this.passwordBlank = false;
    this.passwordError = false;
    if(this.email !== '' && this.email2 !== '') {
      if(this.email === this.email2) {
        if(this.password !== '' && this.password2 !== '') {
          if(this.password === this.password2) {
            console.log(`Email: ${this.email}, Email2: ${this.email2}, Password: ${this.password}, Password2: ${this.password2}, Username: ${this.username}, 
            First Name: ${this.firstName}, Last Name: ${this.lastName}, Phone: ${this.phone}, Email Blank: ${this.emailBlank}, Email Error: ${this.emailError}, 
            Password Blank: ${this.passwordBlank}, Password Error: ${this.passwordError}`)
          }
          else {
            this.passwordError = true;
            console.log('Passwords do not match')
          }
        }
        else {
          this.passwordBlank = true;
          console.log('Passwords can not be blank')
        }
      }
      else {
        this.emailError = true;
        console.log('Emails do not match')
      }
    }
    else {
      this.emailBlank = true;
      console.log('Email can not be blank')
    }
  }
}
