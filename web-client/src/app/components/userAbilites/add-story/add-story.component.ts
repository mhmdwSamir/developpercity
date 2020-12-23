import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  showIconState:boolean = false ;
  searchState:boolean = false
  IconSearchStat:boolean = true
  new_story: FormGroup;

  formAddArticle = new FormGroup({
    title : new FormControl(null, [Validators.required]),
     new_story : new FormControl(null, [Validators.required]),

  });

  constructor(private fb : FormBuilder){
    // this.new_story = fb.group({
    //   new_story: ""
    // });
  }
  ngOnInit(): void {
  }
  changeShowState(){
    this.showIconState =!this.showIconState
    // this.IconSearchStat = !this.IconSearchStat
  }
  showInputSearch(){
    console.log("arrived " )
    this.searchState = !this.searchState
    this.IconSearchStat = !this.IconSearchStat
   
  }
}
