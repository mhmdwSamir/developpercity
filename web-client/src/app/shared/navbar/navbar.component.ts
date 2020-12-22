import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models';
import { AuthenticationService } from 'src/app/services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 currentUser : User;
 checkState:boolean = false
 userAbilities = [
  'write story',
  'Stories',
  'Stats',
  'Design Your Profile',
  'Settings',
  'Reading List',
  'publications',
  'Control Your Recommedations',
  'DEVCITY partner program',
  'Become a Partner',
  'help',
  'Sign out',
];


  constructor(private router:Router ,
  private _authenticationService :AuthenticationService) {
    this._authenticationService.currentUser.subscribe((x)=>{
       // catch current  User
       //console.log(x);
       this.currentUser = x
    })
  }

  ngOnInit(): void {
  }
 
  logout(){
     this._authenticationService.logout();
     this.router.navigate(['/login']);
  }

  getUser(){
    console.log(" i was clicked and i will handle all this things ")
  }
  onUserAbilitySelect(val:string , idx:number){
    console.log('abilitySelected' , val)
    console.log('index of it ',idx)
  
  }
}
