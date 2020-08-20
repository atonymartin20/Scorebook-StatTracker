import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {
    constructor(private userService: UserService) {}
    userInfo = environment.userInfo;
    delete:boolean = false;
    edit: boolean = false;

    ngOnInit(): void {
        // email: 'testemail1@email.com';
        // firstName: 'tester';
        // googleId: '';
        // id: 1;
        // lastName: 'one';
        // password: '$2a$04';
        // phone: '1234567890';
        // username: 'test1';
    }

    deleteAccount(): void {
        this.userService.deleteUser(this.userInfo['id']).subscribe(
            (userData: any[]) => {
                console.log(userData)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    toggleEdit(): void {
        this.edit = !this.edit;
    }

    toggleDelete(): void {
        this.delete = !this.delete;
    }
}
