import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, NavigationEnd, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TitlesComponent } from './titles/titles.component';
import { PanelsComponent } from './panels/panels.component';
import { ReportsComponent } from './reports/reports.component';
import { ContentsComponent } from './contents/contents.component';

//backend related modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterFacultyComponent } from './register/register-faculty/register-faculty.component';
import { RegisterGroupComponent } from './register/register-group/register-group.component';
import { RegisterService } from 'src/app/services/tutorial.service';

const routes: Routes = [

  /* Non-Auth Pages */
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },

  //register pages
  { path: 'register/faculty', component: RegisterFacultyComponent },
  /* Non-Auth Pages */

  /* Auth Pages */
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'titles', component: TitlesComponent },
  { path: 'panels', component: PanelsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'contents', component: ContentsComponent },
  /* Auth Pages */

];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DashboardComponent,
    AccountsComponent,
    TitlesComponent,
    PanelsComponent,
    ReportsComponent,
    ContentsComponent,
    RegisterFacultyComponent,
    RegisterGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
