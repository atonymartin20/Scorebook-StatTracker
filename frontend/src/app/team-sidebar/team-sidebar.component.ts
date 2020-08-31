import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';


@Component({
    selector: 'app-team-sidebar',
    templateUrl: './team-sidebar.component.html',
    styleUrls: ['./team-sidebar.component.css'],
})
export class TeamSidebarComponent implements OnInit {
    constructor() {}
    team = environment.activeTeam;

    ngOnInit(): void {
        console.log(environment)
    }
}
