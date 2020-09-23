import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { SeasonsService } from '../seasons.service';
import { Router } from '@angular/router';

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

    constructor(private router: Router, private teamService: TeamsService, private seasonService: SeasonsService) {}

    ngOnInit(): void {
        if (environment.seasonsInfo.find((x) => x.id === environment.activeSeason)) {
            let foundIndex = environment.seasonsInfo.findIndex((x) => x.id === environment.activeSeason);
            this.season = environment.seasonsInfo[foundIndex]
        }
        this.findTeamsInSeason();
    }

    toggleEdit(): void {
        this.edit = !this.edit;
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
        this.seasonService.editSeason(this.season).subscribe(
            (error) => {
                console.log(error['error']);
            }
        )    
    }

    deleteSeason(): void {
        this.seasonService.deleteSeason(this.season['id']).subscribe(
            () => {
                this.seasonService.grabSeasonData(environment.userInfo, environment.tokenData).subscribe(
                    (seasonData: any[]) => {
                        environment.seasonsInfo = seasonData;
                        this.teamsInSeason.map((team) => {
                            this.teamService.deleteTeam(team['id']).subscribe(
                                (error) => {
                                    console.log(error['error']);
                                }
                            )
                        })
                    },
                    (error) => {
                        console.log(error);
                        environment.seasonsInfo = [];
                    }
                );
            let timeout: number;
            timeout = window.setTimeout(() => {this.router.navigate(['/dashboard'])}, 400);
            },
            (error) => {
                console.log(error);
            }
        )    
    }

    grabTeamId(id) {
        environment.activeTeam = id;
    }
}