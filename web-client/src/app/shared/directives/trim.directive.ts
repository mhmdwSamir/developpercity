import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTrim]',
  exportAs: 'azab'
})
export class TrimDirective implements OnInit, AfterViewInit {

  constructor(
    private _el: ElementRef
  ) {}
  
  ngOnInit() {
  }
  // testing Purposes
  ngAfterViewInit() {
    // console.log(this._el);
    // this._el.nativeElement.textContent = `I'm trimed()!! ${this._el.nativeElement.textContent}`;
  }

logMe() {
console.log('Log me fired!!');
}
}
