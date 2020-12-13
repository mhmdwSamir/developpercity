import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    
    loginForm = new FormGroup({
       email : new FormControl(null , [Validators.required , Validators.email]),
       password : new FormControl(null ,  [Validators.required])
     
   })
    
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private _alertService: AlertService) {
          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

  ngOnInit(): void {
  }
  //  convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls; 
  }
  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this._alertService.clear();
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
        // successs
            data => {
            console.log("Data From Log in" , data)
                this.router.navigate([this.returnUrl]);
            },
            // error
            error => {
          //  console.log("Error" , error)
                this._alertService.error(error);
                this.loading = false;
            });
  }
  onLogFb(){
   FB.getLoginStatus((response)=>{
   
      if(response.status ==="connected"){
         this.router.navigate(["./home"])
      } 
      else{
        FB.login((loginResponse)=>{
          this.router.navigate(["./home"])
        })
      }
   
   })
  
  
  }

}
