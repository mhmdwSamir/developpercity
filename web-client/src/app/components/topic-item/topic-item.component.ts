import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topic-item',
  templateUrl: './topic-item.component.html',
  styleUrls: ['./topic-item.component.scss']
})
export class TopicItemComponent implements OnInit {

  topics_items  = [
    {
      topicId:1,
      topic_title :" SoftWare Engineering "
    },
    {
      topicId:2,
      topic_title :"Arificial Intelligence"

    },
    {
      topicId:3,
      topic_title :" #01 Shot on ruby"
    }
  ];
  @ViewChild("followbtn") followbtn: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  // ngAfterViewInit(){

  
  //   this.followbtn.nativeElement.innerHTML = " Following";
  // }

topic_toFollow:string
start_following:any = false ; 
btnText: string = 'Follow';
/* 
  A problem Face Me haere 
*/
  startFollowing(ele ,topic:string){
  this.topic_toFollow = topic
  console.log("topic to follow " , topic)
 

  console.log(this.followbtn.nativeElement.innerHTML)
  //  this.startFollowing = true
  this.followbtn.nativeElement.innerHTML = "Following";

  // if(this.start_following) { 
  //   this.btnText = 'Follow'
  // } else {
  //   this.btnText = 'Following'
  // }

  }

}
