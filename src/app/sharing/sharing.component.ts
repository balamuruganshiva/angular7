import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css']
})
export class SharingComponent implements OnInit {

  @ViewChild('redcolor') redcolor: any;

  user:Object;
  message:string="";
  public name:string;
  viewChildMessage: string 
  constructor(public dataService: DataService) {   
  }
  
  ngOnInit() {
    //this.user = [{name:"Bala",age:29},{name:"Murugan",age:30}];
     this.name ="Child Component";
  }
  parentComponent(){
    this.user = [{name:"Bala",age:29},{name:"Murugan",age:30}];
  }
  setRedColor(){
    this.redcolor.nativeElement.setAttribute("style", "color:red");
  }
  
  SetValue(){
    this.dataService.setValue("Set The values from service");
  }
  /*receiveMessage($event) {
    this.message = $event
  }*/

}
