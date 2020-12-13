import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root',
 })
export class MatchPassword {

    checkPasswords(control: AbstractControl) { 
    
    let password = control.get('password').value;
    let confirmPass = control.get('repeatPassword').value;
    return password === confirmPass ? null : { DontMatch: true }     
  }
}
