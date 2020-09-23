import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { PlayersService } from '../players.service';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-team-details',
    templateUrl: './team-details.component.html',
    styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent implements OnInit {
    team = [];
    edit: boolean = false;
    delete: boolean = false;
    teamContainsTie: boolean = false;
    playersInSeason = [];
    sportIsRacing: boolean = false;

    constructor(private router: Router, private teamService: TeamsService, private playerService: PlayersService) {}

    ngOnInit(): void {
        this.teamService.findTeamById(environment.activeTeam).subscribe((team: any[]) => {
            this.team = team;   
            console.log(team)
            console.log(team['ties'] < 0) 
            if(team['ties'] > 0) {
                this.toggleTeamContainsTie();
            }
        });
        this.findPlayersForTeam();
        this.checkSport();
    }

    checkSport(): void {
        console.log(this.team['sport'])
        if (this.team['sport'] === 'racing') {
            this.sportIsRacing = true;
        }
        else {
            this.sportIsRacing = false;
        }
    }

    toggleEdit(): void {
        this.edit = !this.edit;
    }

    toggleDelete(): void {
        this.delete = !this.delete;
    }

    toggleTeamContainsTie(): void {
        this.teamContainsTie = !this.teamContainsTie;
    }

    editTeam(): void {
        this.edit = false;
        console.log(this.team)
        this.teamService.editTeam(this.team).subscribe(
            (error) => {
                console.log(error['error']);
            }
        )
        this.checkSport();
    }

    deleteTeam(): void {
        console.log('Need to delete Team')
    }

    findPlayersForTeam(): void {
        // this.playerService.findTeamsBySeasonId(seasonData).subscribe(
        //     (data: any[]) => {
        //         data.sort(function(a, b) {
        //             if(a.teamName < b.teamName) { return -1 }
        //             if (a.teamName > b.teamName) { return 1 }
        //             return 0
        //         })
        //         environment.teamsInSeason = data;
        //         this.teamsInSeason = data;
        //     },
        //     (error) => {
        //         console.log(error);
        //     }
        // )
    }

    grabPlayerId(id): void {
        environment.activePlayer = id;
    }
}
