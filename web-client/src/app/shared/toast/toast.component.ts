import { Component, OnInit } from '@angular/core';
import { ToastData } from 'src/app/interfaces/toast-data';
import {ToastService} from '../../services/toast.service'
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  constructor( readonly data: ToastData) { }

  ngOnInit(): void {
  }
  close(){
    console.log(" toast was closed  ")
  }
  // this.toast.show({ text: 'Everything is ok!' });


}


