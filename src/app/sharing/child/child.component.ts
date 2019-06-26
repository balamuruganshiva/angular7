import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:any;
  @Output() messageEvent = new EventEmitter<string>();
  message;
  viewChildMessage;
  constructor() { }

  ngOnInit() {
    this.message ="Content Comes from Child";
    this.viewChildMessage = "View Child Message";
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }

}
