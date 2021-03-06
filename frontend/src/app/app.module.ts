import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthorizeComponent } from './authorize/authorize.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { CreateSeasonComponent } from './create-season/create-season.component';
import { SeasonSidebarComponent } from './season-sidebar/season-sidebar.component';
import { SeasonScheduleComponent } from './season-schedule/season-schedule.component';
import { SeasonStandingsComponent } from './season-standings/season-standings.component';
import { SeasonTeamsComponent } from './season-teams/season-teams.component';
import { TeamSidebarComponent } from './team-sidebar/team-sidebar.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        DashboardComponent,
        LoginComponent,
        RegisterComponent,
        LandingPageComponent,
        AuthorizeComponent,
        SideBarComponent,
        UserSettingsComponent,
        SeasonDetailsComponent,
        CreateSeasonComponent,
        SeasonSidebarComponent,
        SeasonScheduleComponent,
        SeasonStandingsComponent,
        SeasonTeamsComponent,
        TeamSidebarComponent,
        TeamDetailsComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}