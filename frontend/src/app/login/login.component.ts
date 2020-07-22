import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.email !== '' && this.password !== '') {
      let credentials = {
        email: this.email,
        password: this.password
      }
      this.userService.login(credentials);
      console.log(this.email, this.password)
    }
  }

  loginWithGoogle(): void {
    this.document.location.href='http://localhost:1111/api/authenticationRouter/google';
  }

}
