import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Input() control:FormControl;
@Input() label:string;
@Input() placeholder:string;

  constructor() { }
  ngOnInit(): void {
  }

  showMessage(control:any){

    return control.errors && control.touched &&  control.dirty
  }

}
