import { Component, OnInit } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-datashare',
  templateUrl: './datashare.component.html',
  styleUrls: ['./datashare.component.css']
})
export class DatashareComponent implements OnInit {
  public name:string;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.name="";
  }
  GetValue(){
    //alert(this.dataService.getValue());
    this.name = this.dataService.getValue();
  }

}
