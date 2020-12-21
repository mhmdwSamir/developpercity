import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {



checkState:boolean= false
drop_user_setting = [
  {
    id:"dismiss",
  title :"Dismiss Story",


  },
  {
    id:"mute",
  title :"Mute Story",
  },
  {
    id:"report",
  title :"Report User"
  },
  {
    id:"block",
  title :"Block User"
  }
]


  constructor() { }
  ngOnInit(): void {}

  iconClicked(){
    this.checkState = !this.checkState
    
  }

  clickSetting(setting){
    console.log(setting)
    console.log("set clicked under control ")
  }

}
