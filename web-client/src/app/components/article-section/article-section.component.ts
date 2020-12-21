import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/Models/article.model.model';



@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent implements OnInit {
  checkState:boolean= false;
  iconState:boolean = false
@Input() article:Article
drop_user_setting = [
  {
  title :"Dismiss Story",

  },
  {
  title :"Dismiss Story",
  },
  {
  title :"Report User"
  },
  {
  title :"Block User"
  }
]

  constructor() { }

  ngOnInit(): void {
 
  }
  getShortName(fullName) { 
    return fullName.split(' ').map(n => n[0]).join('');
  }
  iconClicked(){
    this.checkState = !this.checkState
    this.iconState = true
  }

  clickSetting(setting){
     console.log(setting)
    console.log("CLICKED")
  }

  saveArticle(item:Article){
    
    console.log("Article Saved to your list  " , item)
  }

}
