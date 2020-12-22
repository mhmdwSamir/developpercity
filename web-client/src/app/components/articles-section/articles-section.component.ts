import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { Article } from 'src/app/Models/article.model.model';
import { ArticlesService } from 'src/app/services';

@Component({
  selector: 'app-articles-section',
  templateUrl: './articles-section.component.html',
  styleUrls: ['./articles-section.component.scss']
})
export class ArticlesSectionComponent implements OnInit {
  articles: Article[]
  constructor(private _aService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles() {
    this._aService.getArticles()
    .pipe(pluck('data'))
    .subscribe((data) => {
      console.log(data)
      this.articles = data;
    });

  }


}
