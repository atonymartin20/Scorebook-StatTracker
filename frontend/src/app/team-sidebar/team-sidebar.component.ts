import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { TeamsService } from '../teams.service';


@Component({
    selector: 'app-team-sidebar',
    templateUrl: './team-sidebar.component.html',
    styleUrls: ['./team-sidebar.component.css'],
})
export class TeamSidebarComponent implements OnInit {
    constructor( private teamService: TeamsService ) {}
    team = [];

    ngOnInit(): void {
        console.log(environment)
        this.teamService.findTeamById(environment.activeTeam).subscribe((team: any[]) => {
            this.team = team;    
            console.log(team);
        });
    }
}
