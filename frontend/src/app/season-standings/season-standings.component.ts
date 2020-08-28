import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-season-standings',
    templateUrl: './season-standings.component.html',
    styleUrls: ['./season-standings.component.css'],
})
export class SeasonStandingsComponent implements OnInit {
    teams = environment.teamsInSeason;
    season = [];
    seasonContainsTies: boolean = false;

    constructor() {}

    ngOnInit(): void {
        if (environment.seasonsInfo.find((x) => x.id === environment.activeSeason)) {
            let foundIndex = environment.seasonsInfo.findIndex((x) => x.id === environment.activeSeason);
            this.season = environment.seasonsInfo[foundIndex];
        }
        this.seasonContainsTiesCheck();

    }

    seasonContainsTiesCheck(): void {
        this.seasonContainsTies = false;
        this.teams.map((team) => {
            if(team.ties > 0) {
                this.seasonContainsTies = true;
            }
        })
    }
}
