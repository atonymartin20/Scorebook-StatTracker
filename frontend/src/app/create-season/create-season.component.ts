import { Component, OnInit } from '@angular/core';
import { SeasonsService } from '../seasons.service';
import { TeamsService } from '../teams.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-create-season',
    templateUrl: './create-season.component.html',
    styleUrls: ['./create-season.component.css'],
})
export class CreateSeasonComponent implements OnInit {
    name = '';
    teamCount = null;
    gameCount = null;
    addedTeams = 0;
    sport = 'baseball';
    adminId = environment.userInfo['id']
    step1:boolean = false;
    step2:boolean = false;
    step3:boolean = false;
    teams = [];
    nameError = false;
    teamNameError = false;
    
    constructor(private router: Router, private seasonService: SeasonsService, private teamService: TeamsService) {}

    ngOnInit(): void {}

    finalize(): void {
        let seasonData = {
            name: this.name,
            adminUserId: environment.userInfo['id'],
            teamCount: this.teamCount || 0,
            gameCount: this.gameCount || 0,
            sport: this.sport
        }
        this.seasonService.addSeason(seasonData).subscribe(
            (seasonData: any[]) => {
                environment.activeSeason = seasonData
                this.seasonService.grabSeasonData(environment.userInfo, environment.tokenData).subscribe(
                    (allSeasonData: any[]) => {
                        environment.seasonsInfo = allSeasonData;
                        this.teams.map((team, index) => {
                            let teamData = {
                                teamName: team.name,
                                seasonId: seasonData
                            }
                            this.teamService.addTeam(teamData).subscribe(
                                (individualTeamData: any[]) => {
                                    console.log(individualTeamData)
                                },
                                (error) => {
                                    console.log(error);
                                }
                            )
                        })
                    },
                    (error) => {
                        console.log(error);
                    }
                );
                let timeout: number;
                timeout = window.setTimeout(() => {this.router.navigate(['/season/details'])}, 900);
            },
            (error) => {
                console.log(error);
            }
        );
    }

    continueToStep1(): void {
        this.nameError = false;
        if (this.name !== '') {
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
            if(this.addedTeams > this.teamCount) {
                this.teams = []
                for(let i = 1; i <= this.teamCount; i++) {
                    this.teams.push({"name": `Team ${i}`, "teamNumber": i});
                    this.addedTeams++;
                    if(this.addedTeams === this.teamCount) {
                        break;
                    }
                }
            }
    
            if(this.addedTeams < this.teamCount) {
                this.teams = []
                this.addedTeams = 0;
                for(let i = 1; i <= this.teamCount; i++) {
                    this.teams.push({"name": `Team ${i}`, "teamNumber": i});
                    this.addedTeams++;
                    if(this.addedTeams === this.teamCount) {
                        break;
                    }
                }
            }
        }
        else {
            this.nameError = true;
        }
    }

    goBackToStep0(): void {
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
    }

    continueToStep2(): void {
        this.teamNameError = false;
        this.teams.map((team, index) => {
            if (team.name !== "") {}
            else {
                console.log('Team name can not be empty')
                this.teamNameError = true;
            }
        })
        if(this.teamNameError === false) {
            this.step1 = true;
            this.step2 = true;
            this.step3 = false;
        }
    }

    goBackToStep1(): void {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
    }

    continueToStep3(): void {
        this.step1 = true;
        this.step2 = true;
        this.step3 = true;
    }

    goBackToStep2(): void {
        this.step1 = true;
        this.step2 = true;
        this.step3 = false;
    }
}
