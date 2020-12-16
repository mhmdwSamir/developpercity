import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.scss']
})
export class FollowerComponent implements OnInit , AfterViewInit {
  // @ViewChild('state', {read: ViewContainerRef}) vcf: ViewContainerRef;
  // state:any
  // @ViewChild('state') button;

  
  constructor(private elRef:ElementRef) {}

  ngOnInit(): void {
   const  el = this.elRef.nativeElement;
    // console.log("from ele" ,el);
  }
  
  ngAfterViewInit() {
  
    const div = this.elRef.nativeElement
    // console.log("from After view Init ",div)
  }
  
  
 
  
  
  
}
