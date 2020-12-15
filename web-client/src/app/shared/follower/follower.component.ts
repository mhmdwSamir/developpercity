import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit , AfterViewInit {
  // @ViewChild('state', {read: ViewContainerRef}) vcf: ViewContainerRef;
  @ViewChild('state') button;

  
  constructor(private elRef:ElementRef) {
    this.elRef.nativeElement}

  ngOnInit(): void {
    var el = this.elRef.nativeElement;
    console.log("from ele" ,el);
  }
  state:any
  changeFstate(value){
      console.log("from State " , value)
      // this.value = "Following"
    
  }
  ngAfterViewInit() {
    // child is set
    var div = this.elRef.nativeElement
  
    console.log("from After view Init ",div)
  }
  
  
 
  
  
  
}
