import { Component, OnInit } from '@angular/core';

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

    constructor() {}

    ngOnInit(): void {}

    activateDropdown(): void {
        this.activeDropdown = true;
    }

    closeDropdown(): void {
        this.activeDropdown = false;
    }
}
