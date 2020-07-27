import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { env } from 'process';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.css']
})
export class AuthorizeComponent implements OnInit {
  token = environment.tokenData;
  
  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    console.log(environment)
    this.grabData(environment.tokenData);
    // console.log(window.location)
    // if(window.location.search !== '') {
    //   environment.tokenData = window.location.search.slice(7,9999);
    //   this.token = window.location.search.slice(7,9999)
    //   this.grabData(this.token);
    // }
    // else {
    // }
  }


  grabData(token): void {
    this.userService.grabUserData(token).subscribe((userData:any[]) => {
      environment.userInfo = userData
      console.log(userData)
      this.router.navigate(['/dashboard'])
    })
  }

}