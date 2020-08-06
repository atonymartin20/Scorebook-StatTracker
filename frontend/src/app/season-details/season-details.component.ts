import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-season-details',
    templateUrl: './season-details.component.html',
    styleUrls: ['./season-details.component.css'],
})
export class SeasonDetailsComponent implements OnInit {
    teamsInSeason = [];
    season = [];
    seasonId = environment.activeSeason;
    edit: boolean = false;
    delete: boolean = false;

    constructor(private teamService: TeamsService) {}

    ngOnInit(): void {
        if (environment.seasonsInfo.find((x) => x.id === environment.activeSeason)) {
            let foundIndex = environment.seasonsInfo.findIndex((x) => x.id === environment.activeSeason);
            this.season = environment.seasonsInfo[foundIndex]
        }
        this.findTeamsInSeason();
    }

    toggleEdit(): void {
        this.edit = true;
    }

    toggleDelete(): void {
        this.delete = !this.delete;
    }

    findTeamsInSeason(): void {
        let seasonData = {
            seasonId: this.seasonId
        }
        this.teamService.findTeamsBySeasonId(seasonData).subscribe(
            (data: any[]) => {
                data.sort(function(a, b) {
                    if(a.teamName < b.teamName) { return -1 }
                    if (a.teamName > b.teamName) { return 1 }
                    return 0
                })
                environment.teamsInSeason = data;
                this.teamsInSeason = data;
            },
            (error) => {
                console.log(error);
            }
        )
    }

    editSeason(): void {
        this.edit = false;
    }

    deleteSeason(): void {

    }
}