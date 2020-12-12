import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component"
import {LogInComponent} from "./components/log-in/log-in.component"
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import  {AuthGuard} from "./guards"

const appRoutes: Routes = [
  { path: '', component: HomeComponent  , canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent  , canActivate: [AuthGuard] },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
