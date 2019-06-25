import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  stringInterpolation:string;
  fname:string;
  lname:string;
  fullnames:string;
  display:boolean;
  disabled:boolean;
  showFlag:boolean;
  colorFlag:boolean;
  templateReference:string;
  userName:string;
  constructor() { }
  
  ngOnInit() {
    this.stringInterpolation="OnewayBinding"
    this.display =false;
    this.disabled = false;
    this.showFlag =false;
    this.colorFlag = false;
    this.templateReference = "";
    this.userName = "Default";
  }
  firstname(event){
    this.fname=event.target.value;
  }
  lastname(event){
    this.lname=event.target.value;
  }
  fullname(){
     this.fullnames=this.fname+" "+this.lname;
     this.display=true;
  }
  disable(){
    this.disabled=true;
  }
  show(){
    this.showFlag = true;
  }
  hide(){
    this.showFlag = false;
  }
  red(){
    this.colorFlag = true;
  }
  textClicked(name: HTMLInputElement) {console.log(name);
     this.templateReference = name.value;
   }
  

}
