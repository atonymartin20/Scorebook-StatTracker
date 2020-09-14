import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
    }

    createSeasonBaseball() {
        environment.createSport = 'baseball'
    }

    createSeasonFootball() {
        environment.createSport = 'football'
    }

    createSeasonBasketball() {
        environment.createSport = 'basketball'
    }

    createSeasonSoccer() {
        environment.createSport = 'soccer'
    }

    createSeasonHockey() {
        environment.createSport = 'hockey'
    }

    createSeasonGolf() {
        environment.createSport = 'golf'
    }

    createSeasonRacing() {
        environment.createSport = 'racing'
    }
}
