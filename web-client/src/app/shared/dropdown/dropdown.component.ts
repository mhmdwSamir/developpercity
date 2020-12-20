import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  dropDownInst 
  dropdownName = "DropDown";
  selectedOption ="option 3"
  options= [
    // array of options 
    "option1",
    "option2",
    "option3",
    "option7",
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onOptionClick(val){

     console.log(" from OPTIONCLICK ", val)
  }
  optionSelected(){}

}
