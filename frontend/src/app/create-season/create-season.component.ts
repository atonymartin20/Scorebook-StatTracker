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
    sport = environment.createSport;
    year = 2020;
    differentSports = [];
    yearOptions = [2020, 2017, 2018, 2019, 2021, 2022];
    adminId = environment.userInfo['id']
    step1:boolean = false;
    step2:boolean = false;
    step3:boolean = false;
    step4:boolean = false;
    teams = [];
    nameError:boolean = false;
    teamNameError:boolean = false;
    disabledButton:boolean  = false;
    sportIsNotGolf: boolean = false;
    
    constructor(private router: Router, private seasonService: SeasonsService, private teamService: TeamsService) {}

    ngOnInit(): void {
        if (this.sport === 'baseball') {
            this.differentSports = ['baseball', 'football', 'basketball', 'soccer', 'hockey', 'golf', 'racing'];
        }
        else if (this.sport === 'football') {
            this.differentSports = ['football', 'baseball', 'basketball', 'soccer', 'hockey', 'golf', 'racing'];
        }
        else if (this.sport === 'basketball') {
            this.differentSports = ['basketball', 'baseball', 'football', 'soccer', 'hockey', 'golf', 'racing'];
        }
        else if (this.sport === 'soccer') {
            this.differentSports = ['soccer', 'baseball', 'football', 'basketball', 'hockey', 'golf', 'racing'];
        }
        else if (this.sport === 'hockey') {
            this.differentSports = ['hockey', 'baseball', 'football', 'basketball', 'soccer', 'golf', 'racing'];
        }
        else if (this.sport === 'golf') {
            this.differentSports = ['golf', 'baseball', 'football', 'basketball', 'soccer', 'hockey', 'racing'];
        }
        else if (this.sport === 'racing') {
            this.differentSports = ['racing', 'baseball', 'football', 'basketball', 'soccer', 'hockey', 'golf'];
        }
        else {
            this.differentSports = ['baseball', 'football', 'basketball', 'soccer', 'hockey', 'golf', 'racing'];
        }
    }

    finalize(): void {
        this.disabledButton = true;
        let seasonData = {
            name: this.name,
            adminUserId: environment.userInfo['id'],
            teamCount: this.teamCount || 0,
            gameCount: this.gameCount || 0,
            sport: this.sport,
            year: this.year,
        }
        this.seasonService.addSeason(seasonData).subscribe(
            (seasonData: any[]) => {
                environment.activeSeason = seasonData
                this.seasonService.grabSeasonData(environment.userInfo, environment.tokenData).subscribe(
                    (allSeasonData: any[]) => {
                        environment.seasonsInfo = allSeasonData;
                        this.teams.map((team) => {
                            let teamData = {
                                teamName: team['name'],
                                seasonId: seasonData
                            }
                            this.teamService.addTeam(teamData).subscribe(
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
        this.sportIsNotGolf = true;
        this.nameError = false;
        if (this.name !== '') {
            this.step1 = true;
            this.step2 = false;
            this.step3 = false;
            this.step4 = false;
        }
        else {
            this.nameError = true;
        }
        if(this.sport === 'golf') {
            this.sportIsNotGolf = false;
        }
    }

    goBackToStep0(): void {
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
    }

    continueToStep2(): void {
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
        this.step1 = true;
        this.step2 = true;
        this.step3 = false;
        this.step4 = false;
    }

    goBackToStep1(): void {
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.step4 = false;
    }

    continueToStep3(): void {
        this.teamNameError = false;
        this.teams.map((team, index) => {
            if (team['name'] !== "") {}
            else {
                console.log('Team name can not be empty')
                this.teamNameError = true;
            }
        })
        if(this.teamNameError === false) {
            this.step1 = true;
            this.step2 = true;
            this.step3 = true;
            this.step4 = false;
        }
    }

    continueToStep4(): void {
        this.step1 = true;
        this.step2 = true;
        this.step3 = true;
        this.step4 = true;
    }

    goBackToStep3(): void {
        this.step1 = true;
        this.step2 = true;
        this.step3 = true;
        this.step4 = false;
    }

    goBackToStep2(): void {
        this.step1 = true;
        this.step2 = true;
        this.step3 = false;
        this.step4 = false;
    }
}
