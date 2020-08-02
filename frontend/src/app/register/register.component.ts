import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    email = '';
    email2 = '';
    password = '';
    password2 = '';
    username = '';
    firstName = '';
    lastName = '';
    phone = undefined;
    emailBlank: boolean = false;
    emailError: boolean = false;
    emailInUseError: boolean = false;
    usernameInUseError: boolean = false;
    passwordBlank: boolean = false;
    passwordError: boolean = false;

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {}

    register(): void {
        this.emailBlank = false;
        this.emailError = false;
        this.passwordBlank = false;
        this.passwordError = false;
        this.emailInUseError = false;
        this.usernameInUseError = false;
        if (this.email !== '' && this.email2 !== '') {
            if (this.email === this.email2) {
                if (this.password !== '' && this.password2 !== '') {
                    if (this.password === this.password2) {
                        let credentials = {
                            email: this.email,
                            username: this.username,
                            password: this.password,
                            firstName: this.firstName,
                            lastName: this.lastName,
                            phone: this.phone,
                        };
                        // Work on this
                        this.userService.testEmail(credentials).subscribe(
                            (emailTest: any[]) => {
                                console.log(emailTest);
                                this.userService.testUsername(credentials).subscribe(
                                    (usernameTest: any[]) => {
                                        console.log(usernameTest);
                                        this.userService.register(credentials).subscribe((userInfo: any[]) => {
                                            console.log(userInfo);
                                            environment.tokenData = userInfo['token'];
                                            this.router.navigate(['authorize']);
                                        });
                                    },
                                    (error) => {
                                        console.log(error);
                                        this.usernameInUseError = true;
                                    }
                                );
                            },
                            (error) => {
                                console.log(error);
                                this.emailInUseError = true;
                            }
                        );
                    } else {
                        this.passwordError = true;
                        console.log('Passwords do not match');
                    }
                } else {
                    this.passwordBlank = true;
                    console.log('Passwords can not be blank');
                }
            } else {
                this.emailError = true;
                console.log('Emails do not match');
            }
        } else {
            this.emailBlank = true;
            console.log('Email can not be blank');
        }
    }
}