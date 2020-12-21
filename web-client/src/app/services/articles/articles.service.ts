import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from 'src/app/Models/article.model.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articlesRootUrl = `http://localhost:3000/api/articles`
 
  constructor(private _http:HttpClient) { }

  getArticles() {
   return  this._http.get<Article[]>(this.articlesRootUrl)
  }
}
