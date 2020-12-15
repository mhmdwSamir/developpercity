import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import  {ErrorInterceptorInterceptor} from "./helpers/error-interceptor.interceptor";
import { JwtModule } from "@auth0/angular-jwt";
import { InputComponent } from './shared/input/input.component';
import { FooterComponent } from './shared/footer/footer.component'
import { AlertService, AuthenticationService, UserService } from './services';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { PlanComponent } from './components/plan/plan.component';
import { PlanDpayComponent } from './components/plan-dpay/plan-dpay.component';
import { AdminComponent } from './components/admin/admin.component';
import { JwtHelperService } from '@auth0/angular-jwt';
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


export function tokenGetter() {
console.log(localStorage.getItem("access_token"))
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
       tokenGetter: tokenGetter,
      //allowedDomains: ["localhost:3001", "foo.com", "bar.com"]
      },
    }),
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













