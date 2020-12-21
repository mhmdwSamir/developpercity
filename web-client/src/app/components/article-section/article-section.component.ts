import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article.model.model';



@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent implements OnInit {
@Input() article:Article
  constructor() { }

  ngOnInit(): void {
 
  }
  getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).join('');
  }


}
