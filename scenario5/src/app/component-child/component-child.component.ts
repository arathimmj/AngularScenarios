import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(inputData){
    this.childEvent.emit(inputData);
  }

}
