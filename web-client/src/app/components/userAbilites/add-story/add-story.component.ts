import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../src/environments/environment';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  showIconState: boolean = false;
  searchState: boolean = false;

  playStateFeild: boolean = false;
  playStateIcon: boolean = true;



  IconSearchStat: boolean = true
  isPassedUrl: boolean = false
  new_story: FormGroup;

  data = [];
  url = `https://api.unsplash.com/search/photos?client_id=${environment.client_id}&query=`;


  formAddArticle = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    newStory: new FormControl()
  });

  playGroup = new FormGroup({
    play: new FormControl(`https://www.youtube.com/embed/8EhFDJ0SGSA`),
  })

  searchGroup = new FormGroup({
    search: new FormControl(null),
  })
  searchKeyword = "";


  vdSrc

  videoId = this.getId(this.playGroup.get("play").value);

  itsSafe: SafeHtml;

  // Private properties
  private safePipe: SafePipe = new SafePipe(this.domSanitizer);



  constructor(private _http: HttpClient, private domSanitizer: DomSanitizer, private sanitizer: DomSanitizer) {
    // this.new_story = fb.group({
    //   new_story: ""
    // });
    this.vdSrc = sanitizer.bypassSecurityTrustResourceUrl(this.videoId)
    // this.itsSafe = this.safePipe.transform(this.videoId, 'html');
    console.log(" control Play ", this.playGroup.get("play").value)
    this.updateVideoUrl(this.getId(this.playGroup.get("play").value))
  }
  ngOnInit(): void {
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.

    let VideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId)
    return VideoUrl
  }
  changeShowState() {
    this.showIconState = !this.showIconState
  }
  showInputSearch() {
    console.log("arrived ")
    this.searchState = !this.searchState
    this.IconSearchStat = !this.IconSearchStat
    this.playStateFeild = !this.playStateFeild
    this.playStateIcon = !this.playStateIcon
  }
  playClicked() {
    console.log("clicked")
    this.playStateFeild = !this.playStateFeild
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


  // const iframeMarkup = '<iframe width="560" height="315" src="//www.youtube.com/embed/' 
  //     + videoId + '" frameborder="0" allowfullscreen></iframe>';

  onKeyEnter(event) {
    console.log("key char was entered !! ", event)
    this.isPassedUrl = !this.isPassedUrl
    this.vdSrc = this.playGroup.get("play").value
    console.log(this.playGroup.get("play").value)
  }




  searchImages() {
    console.log("From Search Images ")
    this._http.get(this.url + this.searchKeyword).subscribe(
      res => {
        console.log(res)
        // this.data = res['results'];​
      });
  }
}
