import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {
    constructor() {}
    userInfo = environment.userInfo;

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
}
