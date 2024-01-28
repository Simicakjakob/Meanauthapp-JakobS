import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


import { ToastrModule } from 'ngx-toastr';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  
    {path:'', component: HomeComponent}, 
    {path:'register', component: RegisterComponent}, 
    {path:'login', component: LoginComponent}, 
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}, 
    {path:'profile', component: ProfileComponent,canActivate:[AuthGuard]}, 
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(appRoutes),
    

  ],
  providers: [
    provideClientHydration(),
    ValidateService,
    AuthService,
    AuthGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
