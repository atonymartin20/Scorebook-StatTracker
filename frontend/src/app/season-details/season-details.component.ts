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
    seasonId = environment.activeSeason;

    constructor(private teamService: TeamsService) {}

    ngOnInit(): void {
        this.findTeamsInSeason();
    }

    findTeamsInSeason(): void {
        let seasonData = {
            seasonId: this.seasonId
        }
        console.log(environment.activeSeason)
        this.teamService.findTeamsBySeasonId(seasonData).subscribe(
            (data: any[]) => {
                environment.teamsInSeason = data;
                console.log(data)
                this.teamsInSeason = data;
            },
            (error) => {
                console.log(error);
            }
        )
    }
}