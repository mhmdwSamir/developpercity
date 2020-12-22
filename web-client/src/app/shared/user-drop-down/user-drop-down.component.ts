import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-drop-down',
  templateUrl: './user-drop-down.component.html',
  styleUrls: ['./user-drop-down.component.scss']
})
export class UserDropDownComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

  onUserAbilitySelect(val:string , idx:number){
    console.log('abilitySelected' , val)
    console.log('index of it ',idx)

  }

}
