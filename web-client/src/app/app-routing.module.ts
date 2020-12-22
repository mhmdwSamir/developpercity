import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component"
import {LogInComponent} from "./components/log-in/log-in.component"
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import  {AuthGuard} from "./guards"
import { PlanComponent } from './components/plan/plan.component';
import { AdminComponent } from './components/admin/admin.component';
import {RoleGuardService as RoleGuard } from './guards/role-gservice.guard';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './nav-list-coms/about/about.component';
// import { UserFollowerComponent } from './components/user-followers/user-followers.component';
import { FollowerComponent } from './shared/follower/follower.component';
import { HelpComponent } from './nav-list-coms/help/help.component';
import { LegalComponent } from './nav-list-coms/legal/legal.component';
import { AddStoryComponent } from './components/userAbilites/add-story/add-story.component';
import { DesignProfileComponent } from './components/userAbilites/design-profile/design-profile.component';
import { StoriesComponent } from './components/userAbilites/stories/stories.component';
import { StatsComponent } from './components/userAbilites/stats/stats.component';





const appRoutes: Routes = [
  // { path: '', component: HomeComponent  , canActivate: [AuthGuard] },
  { path: '', component: HomeComponent  },
  { path: 'home',   redirectTo: '', pathMatch: 'full' }, 
  { path: 'plan', component: PlanComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'user', 
    component: UserComponent, 
    // canActivate: [AuthGuard] ,
    children : []
   },
   { 
    path: 'user/:followerName', 
    component: FollowerComponent, 
    canActivate: [AuthGuard] ,
    
   },
  { 
    path: 'about', component: AboutComponent , canActivate: [AuthGuard] 
  },
  { 
    path: 'help', component: HelpComponent , canActivate: [AuthGuard] 
  },
  { 
    path: 'legal', component: LegalComponent , canActivate: [AuthGuard] 
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
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
