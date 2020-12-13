import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  showDP:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  
  
  showDetailplan(){
        this.showDP = !this.showDP
  
  }

}
