import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-season-teams',
  templateUrl: './season-teams.component.html',
  styleUrls: ['./season-teams.component.css']
})
export class SeasonTeamsComponent implements OnInit {
  teams = environment.teamsInSeason
  constructor() { }

  ngOnInit(): void {
    console.log(environment)
  }

}
