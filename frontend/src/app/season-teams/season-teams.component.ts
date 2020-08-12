import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-season-teams',
    templateUrl: './season-teams.component.html',
    styleUrls: ['./season-teams.component.css'],
})
export class SeasonTeamsComponent implements OnInit {
    teams = environment.teamsInSeason;
    season = [];
    equalTeams: boolean = false;
    lessTeams: boolean = false;
    extraTeams: boolean = false;
    teamNameError:boolean = false;
    difference = 0;
    addedTeams = [];

    constructor() {}

    ngOnInit(): void {
        if (environment.seasonsInfo.find((x) => x.id === environment.activeSeason)) {
            let foundIndex = environment.seasonsInfo.findIndex((x) => x.id === environment.activeSeason);
            this.season = environment.seasonsInfo[foundIndex];
        }
        console.log(environment);
        console.log(this.season['teamCount']);
        if(this.season['teamCount'] === this.teams.length) {
            this.equalTeams = true;
            this.lessTeams = false;
            this.extraTeams = false;
            this.difference = this.season['teamCount'] - this.teams.length;
        }

        else if (this.season['teamCount'] > this.teams.length) {
            this.equalTeams = false;
            this.lessTeams = true;
            this.extraTeams = false;
            this.difference = this.season['teamCount'] - this.teams.length;
            for(let i = 1; i <= this.difference; i++) {
                this.addedTeams.push({"name": `Team ${i}`})
            }
        }

        else {
            this.equalTeams = false;
            this.lessTeams = false;
            this.extraTeams = true;
            this.difference = this.teams.length - this.season['teamCount'];
        }
    }
}
