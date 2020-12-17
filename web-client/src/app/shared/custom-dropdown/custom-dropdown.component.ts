import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements OnInit {
  @Input() options;
  @Input() dropdownName;
  @Input() selectedOption;
  @Output() optionSelected = new EventEmitter<any>();
  constructor() { }
// Init
  ngOnInit(): void {}

   // Viewinit
  ngAfterViewInit() { }
  // on choose specific option 
  onOptionClick(option) {
    this.optionSelected.emit({ option });
  }
  // ability to search for ty
  searchForKey(key) { }
}
