import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  showIconState:boolean = false ;
  searchState:boolean = false;

  playStateFeild:boolean = false;
  playStateIcon:boolean = true;

  

  IconSearchStat:boolean = true
  isPassedUrl:boolean = false
  new_story: FormGroup;
  
  formAddArticle = new FormGroup({
     title : new FormControl(null, [Validators.required]),
     new_story : new FormControl(null, [Validators.required]),
  });
 
  playGroup = new FormGroup({
    play  : new FormControl(`https://www.youtube.com/embed/8EhFDJ0SGSA`),
  })
  vdSrc=""
  videoId = this.getId(this.playGroup.get("play").value);
  constructor(private fb : FormBuilder){
    // this.new_story = fb.group({
    //   new_story: ""
    // });
    console.log(" control Play " , this.playGroup.get("play").value)
    
  }
  ngOnInit(): void {
  }
  changeShowState(){
    this.showIconState =!this.showIconState
  }
  showInputSearch(){
    console.log("arrived " )
    this.searchState = !this.searchState
    this.IconSearchStat = !this.IconSearchStat
    this.playStateFeild = !this.playStateFeild
    this.playStateIcon =!this.playStateIcon
  }
  playClicked(){
    console.log("clicked")
    this.playStateFeild = !this.playStateFeild
    this.playStateIcon = !this.playStateIcon
  }
  showInputvideoLink(){
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



  onKeyEnter(event){
    console.log("key char was entered !! " , event)
    this.isPassedUrl = !this.isPassedUrl
    this.vdSrc = this.playGroup.get("play").value
    console.log(this.playGroup.get("play").value)
  }
}
