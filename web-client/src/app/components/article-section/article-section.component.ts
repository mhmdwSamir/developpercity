import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-article-section',
  templateUrl: './article-section.component.html',
  styleUrls: ['./article-section.component.scss']
})
export class ArticleSectionComponent implements OnInit {

  articles:any
  constructor(private _aService : ArticlesService) { }

  ngOnInit(): void {
    this.getAllArticlesData()
  }

     getAllArticlesData(){
      this._aService.getArticles().subscribe((res)=>{
        console.log(res)
        this.articles = res
      })
     }
}
