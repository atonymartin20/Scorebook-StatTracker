import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
    title = 'Stat Tracker';
    activeDropdown = false;
    token = environment.tokenData;

    constructor(private router: Router) {}

    ngOnInit(): void {}

    activateDropdown(): void {
        this.activeDropdown = true;
    }

    closeDropdown(): void {
        this.activeDropdown = false;
    }

    logoutUser(): void {
        environment.tokenData = null;
        environment.seasonsInfo = null;
        environment.teamsInSeason = null;
        environment.userInfo = null;
        let timeout: number;
        timeout = window.setTimeout(() => {this.router.navigate(['/welcome'])}, 300);
    }
}
