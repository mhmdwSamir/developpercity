import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  userProfile 
  constructor(private route : ActivatedRoute) {

    this.route.params.subscribe((params)=>{
      console.log(params)
      this.userProfile = params

     })
   }

 
  ngOnInit(): void {
  }

}
