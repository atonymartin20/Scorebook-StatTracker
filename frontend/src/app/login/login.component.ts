import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(@Inject(DOCUMENT) private document: Document, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.email !== '' && this.password !== '') {
      let credentials = {
        email: this.email,
        password: this.password
      }
      this.userService.login(credentials).subscribe((userInfo: any[]) => {
        environment.tokenData = userInfo['token'];
        this.router.navigate(['/authorize'])
      });

    }
  }

  loginWithGoogle(): void {
    this.document.location.href='http://localhost:1111/api/authenticationRouter/google';
  }

}
