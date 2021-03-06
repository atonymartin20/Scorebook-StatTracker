import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { CreateSeasonComponent } from './create-season/create-season.component';
import { SeasonTeamsComponent } from './season-teams/season-teams.component';
import { SeasonStandingsComponent } from './season-standings/season-standings.component';
import { SeasonScheduleComponent } from './season-schedule/season-schedule.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'welcome', component: LandingPageComponent },
    { path: 'authorize', component: AuthorizeComponent },
    { path: 'userSettings', component: UserSettingsComponent },
    { path: 'season/details', component: SeasonDetailsComponent },
    { path: 'season/teams', component: SeasonTeamsComponent },
    { path: 'season/standings', component: SeasonStandingsComponent },
    { path: 'season/schedule', component: SeasonScheduleComponent },
    { path: 'createSeason', component: CreateSeasonComponent },
    { path: 'team/details', component: TeamDetailsComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}