import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
userProfile 
  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe((params)=>{
     console.log(params)
     this.userProfile = params

    })
   }

  ngOnInit(): void {
  }

}
