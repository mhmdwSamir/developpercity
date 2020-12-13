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

import { InputComponent } from './shared/input/input.component';
import { FooterComponent } from './shared/footer/footer.component'
import { AlertService, AuthenticationService, UserService } from './services';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { PlanComponent } from './components/plan/plan.component';
import { PlanDpayComponent } from './components/plan-dpay/plan-dpay.component';
import { AdminComponent } from './components/admin/admin.component';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
