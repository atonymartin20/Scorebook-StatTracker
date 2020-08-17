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
    seasonMode: boolean = false;
    teamMode: boolean = false;
    dashboard: boolean = false;
    seasonsInfo = environment.seasonsInfo

    constructor(private router: Router) {}

    ngOnInit(): void {
        if(window.location.pathname === '/dashboard') {
            this.dashboard = true;
        }
        if(window.location.pathname === '/season') {
            this.seasonMode = true;
        }
        if(window.location.pathname === '/team') {
            this.teamMode = true;
        }
    }

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

    grabSeasonId(id) {
        environment.activeSeason = id;
        this.activeDropdown = false;
    }
}
