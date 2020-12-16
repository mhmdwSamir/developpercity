import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-follower',
  templateUrl: './user-follower.component.html',
  styleUrls: ['./user-follower.component.scss']
})
export class UserFollowerComponent implements OnInit {

  followers_list = [
    {
        imgFollowerPath : "../../../assets/images/followers/loka.png"  ,
        name : "Walla Mamdouh"
    },
    {
       imgFollowerPath : "../../../assets/images/followers/img2.jpeg"  ,
       name : "MHMDAZAB"
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
