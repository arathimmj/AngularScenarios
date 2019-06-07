import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-grand-parent',
  templateUrl: './component-grand-parent.component.html',
  styleUrls: ['./component-grand-parent.component.css']
})
export class ComponentGrandParentComponent implements OnInit {

  public inputData="";

  constructor() { }

  ngOnInit() {
  }

}
