import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  homeContent:string ="";
  users: Object;
  ShowText:boolean;
  templateReference:string;
  userName:string

  constructor(private data: DataService) { }

  ngOnInit() {
    this.homeContent = "Home";
    this.ShowText = false;
    this.userName = "ewre";
    this.data.getUsers().subscribe(data => {
      //console.log(data);
        this.users = data
      }
    );
  }
  ShowName(){
    this.ShowText = true;
  }
  HideName(){
    this.ShowText = false;
  }
  textClicked(name: HTMLInputElement) {console.log(name);
   // alert(name.value);
    this.templateReference = name.value;
  }

}
