import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models';
import { AuthenticationService } from 'src/app/services';

enum UserAbilityEnum {
  writeStory = 1,
  Stories = 2,
  Stats = 3,
  DesignYourProfile = 4,
  Settings = 5,
  ReadingList = 6,
  publications = 7,
  ControlYourRecommedations = 8,
  DEVCITYpartnerprogram = 9,
  BecomeAPartner = 10,
  help = 11,
  SignOut = 12
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;
  checkState: boolean = false

  userAbilities = [
    UserAbilityEnum.writeStory,
    UserAbilityEnum.Stories,
    UserAbilityEnum.Stats,
    UserAbilityEnum.DesignYourProfile,
    UserAbilityEnum.Settings,
    UserAbilityEnum.ReadingList,
    UserAbilityEnum.publications,
    UserAbilityEnum.ControlYourRecommedations,
    UserAbilityEnum.DEVCITYpartnerprogram,
    UserAbilityEnum.BecomeAPartner,
    UserAbilityEnum.help,
    UserAbilityEnum.SignOut,
  
  
  ];

  constructor(private router: Router,
    private _authenticationService: AuthenticationService) {
    this._authenticationService.currentUser.subscribe((x) => {
      // catch current  User
      //console.log(x);
      this.currentUser = x
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this._authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getUser() {
    console.log(" i was clicked and i will handle all this things ")
  }


  onUserAbilitySelect(val: UserAbilityEnum, idx: number) {
    console.log('abilitySelected : UserAbilityEnum', val);
   

    switch (val) {
      case UserAbilityEnum.writeStory: {
            this.router.navigate(['/addStory'])
        break;
      }

      case UserAbilityEnum.Stories: {
        this.router.navigate(['/stories'])
    break;
    }
    case UserAbilityEnum.Stats: {
      this.router.navigate(['/stats'])
    break;
    }
    case UserAbilityEnum.DesignYourProfile: {
      this.router.navigate(['/design'])
    break;
}

      
    }
  }
}
