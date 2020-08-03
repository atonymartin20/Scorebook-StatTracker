import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SeasonsService } from '../seasons.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';

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
    
    constructor() {}

    ngOnInit(): void {}

    finalize(): void {
        console.log('Finalize')
    }

    continueToStep1(): void {
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

    goBackToStep0(): void {
        this.step1 = false;
        this.step2 = false;
        this.step3 = false;
    }

    continueToStep2(): void {
        console.log(this.teams)
        this.step1 = true;
        this.step2 = true;
        this.step3 = false;
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
