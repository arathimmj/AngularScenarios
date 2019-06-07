import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  public name = "";

  constructor() { }

  ngOnInit() {
    console.log("Inside parent component")
  }

  assign(dataInput){
    console.log(dataInput)
    this.name = dataInput;
  }

}
