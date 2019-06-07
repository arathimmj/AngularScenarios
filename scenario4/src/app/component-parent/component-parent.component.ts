import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-parent',
  templateUrl: './component-parent.component.html',
  styleUrls: ['./component-parent.component.css']
})
export class ComponentParentComponent implements OnInit {

  public message="";

  constructor() { }

  ngOnInit() {
  }

}
