import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-season-sidebar',
    templateUrl: './season-sidebar.component.html',
    styleUrls: ['./season-sidebar.component.css'],
})
export class SeasonSidebarComponent implements OnInit {
    constructor() {}
    season = [];

    ngOnInit(): void {
        if (environment.seasonsInfo.find((x) => x.id === environment.activeSeason)) {
            let foundIndex = environment.seasonsInfo.findIndex((x) => x.id === environment.activeSeason);
            this.season = environment.seasonsInfo[foundIndex]
        }
    }
}
