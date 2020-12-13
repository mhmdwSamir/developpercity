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
 currentUser : User
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
}
