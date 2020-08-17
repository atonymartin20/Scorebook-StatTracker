import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Router } from '@angular/router';

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
    disabledButton:boolean  = false;
    edit: boolean = false;
    seasonContainsTies: boolean = false;

    constructor(private router: Router, private teamService: TeamsService) {}

    ngOnInit(): void {
        if (environment.seasonsInfo.find((x) => x.id === environment.activeSeason)) {
            let foundIndex = environment.seasonsInfo.findIndex((x) => x.id === environment.activeSeason);
            this.season = environment.seasonsInfo[foundIndex];
        }
        this.teamCheck();
        this.seasonContainsTiesCheck();
    }

    toggleEdit(): void {
        this.edit = true;
    }

    seasonContainsTiesCheck(): void {
        this.seasonContainsTies = false;
        this.teams.map((team) => {
            if(team.ties > 0) {
                this.seasonContainsTies = true;
            }
        })
    }

    teamCheck(): void {
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

    addTeams(): void {
        this.disabledButton = true;
        this.addedTeams.map((team) => {
            let teamData = {
                teamName: team.name,
                seasonId: this.season['id']
            }
            this.teamService.addTeam(teamData).subscribe(
                (error) => {
                    console.log(error);
                }
            )
        })
        let seasonData = {
            seasonId: this.season['id']
        }
        this.teamService.findTeamsBySeasonId(seasonData).subscribe(
            (data: any[]) => {
                data.sort(function(a, b) {
                    if(a.teamName < b.teamName) { return -1 }
                    if (a.teamName > b.teamName) { return 1 }
                    return 0
                })
                environment.teamsInSeason = data;
                this.teams = data;
            },
            (error) => {
                console.log(error);
            }
        )
        let timeout: number;

        timeout = window.setTimeout(() => {this.router.navigate(['/season/details'])}, 900);
    }

    editTeams(): void {
        this.teams.map((team) => {
            this.teamService.editTeam(team).subscribe(
                (error) => {
                    console.log(error);
                }
            )
        })
        this.edit = false;
    }

    deleteTeam(teamId): void {
        console.log(`Removing Team with ID: ${teamId}`)
        this.teamService.deleteTeam(teamId).subscribe(
            (error) => {
                console.log(error);
            }
        )
        let seasonData = {
            seasonId: this.season['id']
        }
        this.teamService.findTeamsBySeasonId(seasonData).subscribe(
            (data: any[]) => {
                data.sort(function(a, b) {
                    if(a.teamName < b.teamName) { return -1 }
                    if (a.teamName > b.teamName) { return 1 }
                    return 0
                })
                environment.teamsInSeason = data;
                this.teams = data;
            },
            (error) => {
                console.log(error);
            }
        )
    }
}
