import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/Models/article.model.model';

interface IArticlesReponse {
  data: Article[];
  results: number;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articlesRootUrl = `http://localhost:3000/api/articles`

  constructor(private _http: HttpClient) { }

  getArticles(): Observable<IArticlesReponse> {
    return this._http.get<IArticlesReponse>(this.articlesRootUrl);
  }


  addArticles(article:Article): Observable<any> {
    console.log(article)
    return this._http.post(`${this.articlesRootUrl}/add`,article);
  }

}
