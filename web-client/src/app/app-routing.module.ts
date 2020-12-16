import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component"
import {LogInComponent} from "./components/log-in/log-in.component"
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import  {AuthGuard} from "./guards"
import { PlanComponent } from './components/plan/plan.component';
import { AdminComponent } from './components/admin/admin.component';
import {  RoleGuardService as RoleGuard } from './guards/role-gservice.guard';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './nav-list-coms/about/about.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent  , canActivate: [AuthGuard] },
  { path: 'home',   redirectTo: '', pathMatch: 'full' }, 
  { path: 'plan', component: PlanComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent  },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [RoleGuard], 
    data: { 
      expectedRole: 'admin'
    }
  },
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
