import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../src/environments/environment';
import {  AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ArticlesService } from 'src/app/services';
// import { SafePipe } from 'src/app/pipes/safe.pipe';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';



@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  data = [];
  searchKeyword = "";

  vdSrc:any
  itsSafe: SafeHtml;
  ImageData:[]

  url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&query=`;


  showIconsState: boolean = false;
  searchInput: boolean = false;

  playStateFeild: boolean = false;
  playStateIcon: boolean = true;

  IconSearchStat: boolean = true
  isPassedUrl: boolean = false


  new_story: FormGroup;

 //  Main Form holds every thing 
  formAddArticle = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    bodyNewStory: new FormControl(null),
    play: new FormControl(``),
    search: new FormControl(null),
  });

  // subForm 1 
//   playGroup = new FormGroup({
    
//   })
// // subForm 2
//   searchGroup = new FormGroup({
    
//   })
 
//  Paste a link to embed content from another site (e.g. Twitter) and press Enter
  // Private properties
  // private safePipe: SafePipe = new SafePipe(this.domSanitizer);

  // videoId = this.getId(this.formAddArticle.get("play").value);


  constructor(private _http: HttpClient,private _aService:ArticlesService,  private sanitizer: DomSanitizer) {
    // this.vdSrc = sanitizer.bypassSecurityTrustResourceUrl(this.videoId)
    // this.updateVideoUrl(this.getId(this.playGroup.get("play").value))
  }
  ngOnInit(): void {
 
  }

  // updateVideoUrl(id: string) {
  //   let VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId)
  //   return VideoUrl
  // }

  changeIconsState() {
    this.showIconsState = !this.showIconsState
  }

  uploadCameraClick(){
    this.searchInput = false
    this.playStateFeild = false
    this.IconSearchStat= true
    this.playStateIcon  = true;
  }
  searchClicked() {
    this.searchInput = !this.searchInput
    this.IconSearchStat = !this.IconSearchStat
    this.playStateFeild = false
    this.playStateIcon = true;
    // console.log(this.searchGroup.controls.search.value)
  }
  playClicked() {
    this.playStateFeild = !this.playStateFeild
    this.searchInput = false;
    this.IconSearchStat= true
    this.playStateIcon = !this.playStateIcon
   
  }
  showInputvideoLink() {
    console.log("arrived ")
    this.playStateIcon = !this.playStateIcon
    this.playStateIcon = !this.playStateIcon

  }

  getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  onKeyEnter(event) {
    // I hae the event 
    this.isPassedUrl = !this.isPassedUrl
    // this.vdSrc = this.formAddArticle.get("play").value
  }

  // get Image Data 
  searchImages(){
  this._http.get(this.url + this.searchKeyword)
    // .pipe
    // (map(res => res.results)) 
    .subscribe((data :any)=>{
      this.ImageData = data.results
      console.log(data)
    })
 
  }

// on Select Img by USER
imageSelectedPreviewUrl:any
onSelectImg(image:any){
   console.log("image SELECTED =>" , image)
    this.imageSelectedPreviewUrl = image.urls.regular
}

// create Story 
createStory(){
   console.log( " Story Will Created and will add to current user profile  ")

   // 1- collect all data from user 
      //  check if  Article follow Our Privacy
      if(this.formAddArticle.valid){
           console.log("Cong : article is valid and will add it ");


        //  <AbstractControl>(this.formAddArticle.controls['search']).updateValue(this.imageSelectedPreviewUrl);

          this._aService.addArticles(this.formAddArticle.value)
        //  console.log(" formControl search itself ",this.formAddArticle.get("search"))

         
           this.formAddArticle.patchValue({search:this.imageSelectedPreviewUrl })
          console.log("search value " , this.formAddArticle.value)
      } 
   // 2- call the service to add new article 
   // 3- rendering this article in user page 
   // 4- publish this article in DEVCITY

 }

 
}
