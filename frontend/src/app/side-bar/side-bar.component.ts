import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
    constructor() {}
    seasonsInfo = environment.seasonsInfo;

    ngOnInit(): void {}

    grabSeasonId(id) {
        environment.activeSeason = id;
    }
}