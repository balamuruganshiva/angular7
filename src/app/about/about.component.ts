import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  content = "";
  isDisabled:boolean;
  attr:string;
  employee:Object;
  constructor(private data: DataService) { 
  }

  ngOnInit() {
    this.content = "About";
    this.isDisabled=true;
    this.attr = "textme";
    this.data.getEmployee().subscribe(data=>{
        this.employee = data;
    });
  }
  funcClick(user){
    alert("Clicked");
    alert(user.employee_name);
  }
  getValue(event){
    alert(event.target.value);
  }

}
