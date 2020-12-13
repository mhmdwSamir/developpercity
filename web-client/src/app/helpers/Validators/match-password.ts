import { AbstractControl } from '@angular/forms';

export class MatchPassword {

    checkPasswords(control: AbstractControl) { 
    
    let password = control.get('password').value;
    let confirmPass = control.get('repeatPassword').value;
    
    
    return password === confirmPass ? null : { DontMatch: true }     
  }
}
