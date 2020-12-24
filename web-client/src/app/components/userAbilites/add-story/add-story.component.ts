import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



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


  showIconState: boolean = false;
  searchInput: boolean = false;

  playStateFeild: boolean = false;
  playStateIcon: boolean = true;

  IconSearchStat: boolean = true
  isPassedUrl: boolean = false


  new_story: FormGroup;

 //  Main Form holds every thing 
  formAddArticle = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    newStory: new FormControl()
  });

  // subForm 1 
  playGroup = new FormGroup({
    play: new FormControl(`https://www.youtube.com/embed/8EhFDJ0SGSA`),
  })
// subForm 2
  searchGroup = new FormGroup({
    search: new FormControl(""),
  })
 

  
 

  // Private properties
  // private safePipe: SafePipe = new SafePipe(this.domSanitizer);
  videoId = this.getId(this.playGroup.get("play").value);


  constructor(private _http: HttpClient, private domSanitizer: DomSanitizer, private sanitizer: DomSanitizer) {
    this.vdSrc = sanitizer.bypassSecurityTrustResourceUrl(this.videoId)
    console.log(" control Play ", this.playGroup.get("play").value)
    this.updateVideoUrl(this.getId(this.playGroup.get("play").value))
  }
  ngOnInit(): void {
 
  }

  updateVideoUrl(id: string) {
    let VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId)
    return VideoUrl
  }
  changeShowState() {
    this.showIconState = !this.showIconState
  }
  searchClicked() {
    this.searchInput = !this.searchInput
    this.IconSearchStat = !this.IconSearchStat
    this.playStateFeild = false
    this.playStateIcon = true;
    console.log(this.searchGroup.controls.search.value)
  }
  playClicked() {
    this.playStateFeild = !this.playStateFeild
    this.searchInput = false
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
    this.isPassedUrl = !this.isPassedUrl
    this.vdSrc = this.playGroup.get("play").value
  }

  // get Image Data 
  searchImages(){
    console.log("Integration Unspalsh  ")
  this._http.get(this.url + this.searchKeyword)
    .pipe
    (
    map(res => res.results)
    
    ) 
    .subscribe((data)=>{
      this.ImageData = data
      console.log(data)
    })
    //resultssubscribe(
    //   res => {
    //     //  getting the data :)
    //     console.log(res)
        
    //   });
  }

// on Select Img by USER
imageSelectedPreviewUrl:any
onSelectImg(image){
   console.log("image SELECTED =>" , image)
    this.imageSelectedPreviewUrl = image.urls.regular
}


}
