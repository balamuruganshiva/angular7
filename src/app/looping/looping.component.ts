import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-looping',
  templateUrl: './looping.component.html',
  styleUrls: ['./looping.component.css']
})
export class LoopingComponent implements OnInit {
  user:any;
  showFlag:boolean;
  switchValue:string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.user=[];
    this.showFlag = false;
  }

  getUser() {
    this.data.getEmployee().subscribe(datas=>{
       this.user = datas;
       this.user= this.user.slice(0,3);
    });
  }
  showText(){
    this.showFlag = true;
  }
  showSwitch(value){
    this.switchValue = value;
  }
}
