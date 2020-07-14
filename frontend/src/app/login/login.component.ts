import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.email !== '' && this.password !== '') {
      console.log(this.email, this.password)
    }
  }

  loginWithGoogle(): void {
    this.document.location.href='http://localhost:1111/api/authenticationRouter/google';
  }

}
