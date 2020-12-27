import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guards";
import { RoleGuardService as RoleGuard } from './guards/role-gservice.guard';
import {RegisterComponent,LogInComponent,NotFoundComponent,HomeComponent , StatsComponent ,StoriesComponent ,DesignProfileComponent , AddStoryComponent ,LegalComponent , HelpComponent ,
  FollowerComponent ,AboutComponent , UserComponent ,AdminComponent , PlanComponent} from  './index-imports';


const appRoutes: Routes = [
  // { path: '', component: HomeComponent  , canActivate: [AuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(f => f.UserModule) },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'plan', component: PlanComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   // canActivate: [AuthGuard] ,
  //   children: []
  // },
  // {
  //   path: 'user/:followerName',
  //   component: FollowerComponent,
  //   canActivate: [AuthGuard],

  // },
  {
    path: 'about', component: AboutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'help', component: HelpComponent, canActivate: [AuthGuard]
  },
  {
    path: 'legal', component: LegalComponent, canActivate: [AuthGuard]
  },
  {
    path: 'addStory', component: AddStoryComponent
  },
  {
    path: 'stats', component: StatsComponent
  },
  {
    path: 'stories', component: StoriesComponent
  }
  ,
  {
    path: 'design', component: DesignProfileComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin'
    }
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
