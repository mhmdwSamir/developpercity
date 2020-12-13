import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  constructor(private router:Router ,private _authenticationService :AuthenticationService) { }

  ngOnInit(): void {
  }
 
  logout(){
     this._authenticationService.logout();
     this.router.navigate(['/login']);
  }
}
