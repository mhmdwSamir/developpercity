import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';

import { fromEvent } from 'rxjs';
import { distinctUntilChanged, filter, map, pairwise, share, throttleTime } from 'rxjs/operators';
enum Direction {
  Up = "Up",
  Down = "Down"
}
enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}
@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})

export class NavListComponent implements OnInit {
 
// sticky: boolean = false;
// isVisible :boolean = false;
navItems = [
"help",
"status",
"writers",
"blog",
"careers",
"privacy",
"terms",
"about",
]

nav_fixed:boolean = false;
@HostListener('document:scroll', ['$event'])
  onScroll(){
     console.log(" Start Scrolling  ")
  }

  //     if(document.body.scrollTop > 0  || document.documentElement.scrollTop > 0){
  //         // add  class 
         
  //         this.nav_fixed = false
          
  //     }else{
      
  //       this.nav_fixed = true
  //     }
        
  // }
  
  
  
// @ViewChild('stickyMenu') nav_list_Position: ElementRef<any>;
  

// @HostBinding('@toggle')
// get toggle(): VisibilityState {
//   return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
// }

  constructor() { }

  ngOnInit(): void {
 // console.log("ele  " , this.nav_list_Position)
  }
  
  // On init, grab the Y position of the list items DOM navLinks
  
  // nav_list_element :any
// ngAfterViewInit(){

//     this.nav_list_element = this.nav_list_Position.nativeElement.offsetTop
//     //console.log("this.nav_list_element",this.nav_list_element)
// }


// listen to scroll event throught HostListener Directive


// @HostListener('window:scroll', ['$event'])
//     handleScroll(event){
  
//         const windowScroll = window.pageYOffset;
//         // console.log("windowScrollValue",windowScroll)
//         // console.log("this.nav_list_element on scroll",this.nav_list_element)
//         if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
//           console.log("End");
//         }
        
//         // if(windowScroll >= 1800){
//         //     this.sticky = true;
//         // } else {
//         //     this.sticky = false;
//         // }
//     }
 // Listen to scroll events and evaluate the condition
 
//  scroll$  = fromEvent(window, "scroll").pipe(
//  // ignore to 10s at start 
//   throttleTime(10),
//   map(()=>window.pageYOffset),
//   pairwise(),
//   map(([y1, y2]): direction => (y2 < y1 ? direction.Up : direction.Down)),
//   distinctUntilChanged(),
  
//  )
 
  // ngAfterViewInit() {
  // console.log("after view init ")
  // const scroll$ = fromEvent(window, 'scroll').pipe(
  //   throttleTime(10),
  //   map(() => console.log(window.pageYOffset)),
  //   pairwise(),
  //  map(()=>{
  //     if(window.pageYOffset > 1296){
        
  //     }
  //  }),
  //   distinctUntilChanged(),
  //   share()
  // );

  // const scrollUp$ = scroll$.pipe(
  //   filter(direction => direction === Direction.Up)
  // )

  // const scrollDown = scroll$.pipe(
  //   filter(direction => direction === Direction.Down)
  // );

  // scrollUp$.subscribe(() => (this.isVisible = true));
  // scrollDown.subscribe(() => (this.isVisible = false));
  // }
 
 
}
