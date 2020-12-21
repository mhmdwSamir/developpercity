import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  articlesTrendingUrl = `http://localhost:3000/api/articles`
  constructor(private _http:HttpClient) { }
  getTrendingItems(){

    return this._http.get(`${this.articlesTrendingUrl}`)
  }
}
