import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TeamsService } from '../teams.service';
import { SeasonsService } from '../seasons.service';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.css'],
})
export class UserSettingsComponent implements OnInit {
    constructor(private router: Router, private userService: UserService, private teamService: TeamsService, private seasonService: SeasonsService) {}
    userInfo = environment.userInfo;
    delete: boolean = false;
    edit: boolean = false;
    changePassword: boolean = false;
    passwordError: boolean = false;
    seasonsInfo = environment.seasonsInfo;
    newPassword = '';
    confirmPassword = '';

    ngOnInit(): void {
        console.log(environment);
        this.seasonsInfo.map((season) => {
            console.log(season);
        });
    }

    deleteAccount(): void {
        this.seasonsInfo.map((season) => {
            let seasonData = {
                seasonId: season['id']
            }
            this.teamService.findTeamsBySeasonId(seasonData).subscribe((teamsInSeason: any[]) => {
                teamsInSeason.map((team) => {
                    console.log(team);
                    this.teamService.deleteTeam(team['id']).subscribe((error) => {
                        console.log(error['error']);
                    });
                });
            });
        //     this.seasonService.deleteSeason(season['id']).subscribe(() => {
        //     });
        });
        // this.userService.deleteUser(this.userInfo['id']).subscribe(
        //     (error) => {
        //         console.log(error);
        //     }
        // );
        // let timeout: number;
        // timeout = window.setTimeout(() => {this.router.navigate(['/welcome'])}, 300);
    }

    toggleEdit(): void {
        this.edit = !this.edit;
    }

    toggleDelete(): void {
        this.delete = !this.delete;
    }

    toggleChangePassword(): void {
        this.changePassword = !this.changePassword;
    }

    editUser(): void {
        this.passwordError = false;
        if (this.changePassword) {
            if (this.newPassword === this.confirmPassword && this.newPassword != '') {
                let updatedUserInfo = {
                    id: this.userInfo['id'],
                    email: this.userInfo['email'],
                    username: this.userInfo['username'],
                    firstName: this.userInfo['firstName'], 
                    lastName: this.userInfo['lastName'],
                    phone: this.userInfo['phone'],
                    password: this.newPassword
                }
                this.edit = !this.edit;
                this.userService.editUser(updatedUserInfo).subscribe();
                (error) => {
                    console.log(error);
                };
            } else {
                this.passwordError = true;
            }
        }
        else {
            this.edit = !this.edit;
            let updatedUserInfo = {
                id: this.userInfo['id'],
                email: this.userInfo['email'],
                username: this.userInfo['username'],
                firstName: this.userInfo['firstName'], 
                lastName: this.userInfo['lastName'],
                phone: this.userInfo['phone'],
            }
            this.userService.editUser(updatedUserInfo).subscribe();
            (error) => {
                console.log(error);
            };
        }
    }
}
