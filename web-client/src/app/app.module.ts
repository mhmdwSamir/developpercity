import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { ErrorInterceptorInterceptor } from "./helpers/error-interceptor.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { InputComponent } from './shared/input/input.component';
import { FooterComponent } from './shared/footer/footer.component'
import { AlertService, AuthenticationService, UserService } from './services';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { PlanComponent } from './components/plan/plan.component';
import { PlanDpayComponent } from './components/plan-dpay/plan-dpay.component';
import { AdminComponent } from './components/admin/admin.component';

import { UserComponent } from './components/user/user.component';
import { TrimDirective } from './shared/directives/trim.directive';
import { DividerComponent } from './shared/divider/divider.component';
import { ArticleComponent } from './shared/article/article.component';
import { FollowerComponent } from './shared/follower/follower.component';
import { MainArticleComponent } from './shared/main-article/main-article.component';
import { TrendItemComponent } from './shared/trend-item/trend-item.component';
import { HeaderSectionComponent } from './shared/header-section/header-section.component';
import { TrendingSectionComponent } from './shared/trending-section/trending-section.component';
import { FooterItemComponent } from './shared/footer-item/footer-item.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { ArticlesSectionComponent } from './components/articles-section/articles-section.component';

import { ArticleSectionComponent } from './components/article-section/article-section.component';
import { AboutComponent } from './nav-list-coms/about/about.component';
import { UserFollowerComponent } from './components/user-followers/user-followers.component';
import { TrimNamePipe } from '../core/pipes/trim-name.pipe';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicItemComponent } from './components/topic-item/topic-item.component';
import { UserNavComponent } from './shared/user-nav/user-nav.component';
import { UserPageComponent } from './shared/user-page/user-page.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { CustomDropdownComponent } from './shared/custom-dropdown/custom-dropdown.component';
import { HelpComponent } from './nav-list-coms/help/help.component';
import { LegalComponent } from './nav-list-coms/legal/legal.component';
import { TrendingModule } from './Modules/trending/trending.module';
import { UserDropDownComponent } from './shared/user-drop-down/user-drop-down.component';
import { AddStoryComponent } from './components/userAbilites/add-story/add-story.component';
import { StatsComponent } from './components/userAbilites/stats/stats.component';
import { DesignProfileComponent } from './components/userAbilites/design-profile/design-profile.component';
import { StoriesComponent } from './components/userAbilites/stories/stories.component';

// import 
import { MaterialModule } from './material-deisgn/material.module';

export function tokenGetter() {
  // console.log(localStorage.getItem("access_token"))
  if (localStorage.getItem("access_token")) {
    console.log(localStorage.getItem("access_token"))
  }
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LogInComponent,
    NotFoundComponent,
    HomeComponent,
    AlertComponent,
    InputComponent,
    FooterComponent,
    PlanComponent,
    PlanDpayComponent,
    AdminComponent,
    UserComponent,
    TrimDirective,
    DividerComponent,
    ArticleComponent,
    FollowerComponent,
    MainArticleComponent,
    TrendItemComponent,
    HeaderSectionComponent,
    TrendingSectionComponent,
    FooterItemComponent,
    NavListComponent,
    ArticlesSectionComponent,
    ArticleSectionComponent,
    AboutComponent,
    UserFollowerComponent,
    TrimNamePipe,
    TopicsComponent,
    TopicItemComponent,
    UserNavComponent,
    UserPageComponent,
    DropdownComponent,
    CustomDropdownComponent,
    HelpComponent,
    LegalComponent,
    UserDropDownComponent,
    AddStoryComponent,
    StatsComponent,
    DesignProfileComponent,
    StoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        //allowedDomains: ["localhost:3001", "foo.com", "bar.com"]
      },
    }),
    TrendingModule,
    MaterialModule
  ],
  providers: [
    AlertService,
    UserService,
    AuthenticationService,
    //  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorInterceptor, multi: true },
    //  { provide: HTTP_INTERCEPTORS,useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

