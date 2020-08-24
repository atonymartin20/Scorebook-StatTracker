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
        // email: 'testemail1@email.com';
        // firstName: 'tester';
        // googleId: '';
        // id: 1;
        // lastName: 'one';
        // password: '$2a$04';
        // phone: '1234567890';
        // username: 'test1';
        // seasonsInfo: (5) [{…}, {…}, {…}, {…}, {…}]
        this.seasonsInfo.map((season) => {
            console.log(season);
        });
    }

    deleteAccount(): void {
        this.userService.deleteUser(this.userInfo['id']).subscribe(
            () => {
                this.seasonsInfo.map((season) => {
                    console.log(season);
                    this.seasonService.deleteSeason(season['id']).subscribe(() => {
                        this.teamService.findTeamsBySeasonId(season['id']).subscribe((teamsInSeason: any[]) => {
                            console.log(teamsInSeason);
                            teamsInSeason.map((team) => {
                                console.log(team);
                                this.teamService.deleteTeam(team['id']).subscribe((error) => {
                                    console.log(error['error']);
                                });
                            });
                        });
                    });
                });
            },
            (error) => {
                console.log(error);
            }
        );
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
        console.log(this.newPassword, this.confirmPassword, this.userInfo['password']);
        if (this.changePassword) {
            if (this.newPassword === this.confirmPassword && this.newPassword !== '') {
                this.userInfo['password'] = this.newPassword;
                console.log(this.userInfo['password']);
                this.edit = !this.edit;
                console.log(this.userInfo);
                this.userService.editUser(this.userInfo).subscribe();
                (error) => {
                    console.log(error);
                };
            } else {
                this.passwordError = true;
                console.log('Failure');
            }
        }
        else {
            this.edit = !this.edit;
            console.log(this.userInfo);
            this.userService.editUser(this.userInfo).subscribe();
            (error) => {
                console.log(error);
            };
        }
    }
}
