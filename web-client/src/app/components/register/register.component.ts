import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AlertService} from "../../services/alert.service"
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService} from "../../services/user.service"
import { MatchPassword } from 'src/app/helpers/Validators/match-password';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  loading = false;
  submitted = false;
  msg = ""
  registerForm = new FormGroup({
      name : new FormControl("" , [Validators.required , Validators.minLength(5) , Validators.maxLength(15)]),
      email : new FormControl("" , [Validators.required , Validators.email]),
      password : new FormControl("" , [Validators.required]),
      repeatPassword : new FormControl("" , [Validators.required]),
   
  } , {
     validators : this._matchPassword.checkPasswords
  })
  
  
  constructor(private _userService :UserService , private _matchPassword:MatchPassword, private _alertService : AlertService , private router: Router,) { }

  ngOnInit(): void {
  }
 

  onSubmit() {
         this.submitted = true;
         // stop here if form is invalid
        //  if (this.registerForm.invalid) {
        //      return;
        //  }
    console.log(this.registerForm.value)
         this.loading = true;
         this._userService.register(this.registerForm.value)
             .pipe(first())
             .subscribe(
                 data => {
                 console.log("User Data " , data)
                     this._alertService.success('Register successful ,  please login Now to start your tour ❤️❤️ ', true);
                     this.router.navigate(['/login']);
                 },
                 error => {
                   this._alertService.error(error);
                     
                     this.msg = error
                     this.loading = false;
                 }); 
  }
   

}
