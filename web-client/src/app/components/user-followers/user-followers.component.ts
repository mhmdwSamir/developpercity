import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-followers',
  templateUrl: './user-followers.component.html',
  styleUrls: ['./user-followers.component.scss']
})
export class UserFollowerComponent implements OnInit {

  followers_list = [
    {
        imgFollowerPath : "../../../assets/images/followers/loka.png" ,
        name : "WallaMamdouh"
    },
    {
        imgFollowerPath : "../../../assets/images/followers/img2.jpeg" ,
        name : "MHMDAZAB"
    },
    {
       imgFollowerPath : "../../../assets/images/followers/img2.jpeg" ,
        name :"A_Atef"
     },
];
  constructor( private router:Router , private route : ActivatedRoute) { }
user:string;
  ngOnInit(): void {
    this.user = this.route.snapshot.paramMap.get("followerName");
    console.log(this.user)
  }
  getFollower(user){
   console.log("User Page ", user)
   this.router.navigate(['/user','@'+ this.user])

  }
}
