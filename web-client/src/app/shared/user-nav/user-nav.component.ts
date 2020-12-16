import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  private articleSubject = new Subject<string>();
userProfile 

// private _articleService: ArticleService

  constructor(private route:ActivatedRoute) {

  this.route.params.subscribe((params)=>{
     console.log(params)
     this.userProfile = params

    })
   }

  ngOnInit(): void {
    const articlePosts$ = this.articleSubject.pipe(
      debounceTime(550),
      distinctUntilChanged(),
      map(userId =>console.log(userId))
      // switchMap(userId => this.blogService.fetchPosts(userId))
    );
  }

 
  searchArticles(searchTerm:string){
    console.log("User Search Term  " ,searchTerm)
    this.articleSubject.next(searchTerm)
  }
 
}
