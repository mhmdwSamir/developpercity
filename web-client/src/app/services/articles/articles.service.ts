import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articlesRootUrl = `http://localhost:3000/api/articles`
 
  constructor(private _http:HttpClient) { }

  getArticles(){
    // 
    return this._http.get(this.articlesRootUrl).subscribe((res)=>{

      console.log(res)
    })

  }
}
