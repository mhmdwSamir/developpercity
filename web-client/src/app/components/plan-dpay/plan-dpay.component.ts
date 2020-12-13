import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plan-dpay',
  templateUrl: './plan-dpay.component.html',
  styleUrls: ['./plan-dpay.component.scss']
})
export class PlanDpayComponent implements OnInit {


  formPay = new FormGroup({
    cardNum : new FormControl(null , [Validators.required ,  Validators.minLength(16) , Validators.maxLength(16)]),
    exDate : new FormControl(null , [Validators.required , Validators.pattern(/\b(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})\b/)]),
    sCode : new FormControl(null, [Validators.required ,Validators.minLength(6) , Validators.maxLength(12)])
     
   })
 

  constructor() { 
  
  }

  ngOnInit(): void {
  }
  payWith():void{
     console.log("Hi ")
  }

}
