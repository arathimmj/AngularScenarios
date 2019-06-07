import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent implements OnInit {

  @Input("parentData") public name;

  constructor() { }

  ngOnInit() {
    console.log("Inside child component")
  }

}
