import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange, Input } from '@angular/core';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.css']
})
export class ComponentParentComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(inputData){
    this.childEvent.emit(inputData);
  }
}
