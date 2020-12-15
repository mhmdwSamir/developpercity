import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
