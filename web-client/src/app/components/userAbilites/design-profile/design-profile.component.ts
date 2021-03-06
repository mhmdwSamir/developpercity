import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SettingDetail } from 'src/app/interfaces/setting-detail';

// interface setDetail {
//   value: string;
//   viewValue: string;
// }
@Component({
  selector: 'app-design-profile',
  templateUrl: './design-profile.component.html',
  styleUrls: ['./design-profile.component.scss']
})
export class DesignProfileComponent implements OnInit {
 
  colors: SettingDetail[] = [
    {value: 'black', viewValue: 'Black'},
    {value: 'red', viewValue: 'Red'},
    {value: 'blue', viewValue: 'Blue'}
  ];   

  avaliableFonts: SettingDetail[]= [
    {value: 'monaco', viewValue: 'Monaco'},
    {value: 'san Serif ', viewValue: 'San Serif'},
    {value: 'arial', viewValue: 'Arial'}
  ];    


  settingHelpers = [
    {name: 'home', viewName: 'HOME'},
    {name: 'story', viewName: 'Story'},
   
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
