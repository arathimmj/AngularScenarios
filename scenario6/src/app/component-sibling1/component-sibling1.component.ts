import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-component-sibling1',
  templateUrl: './component-sibling1.component.html',
  styleUrls: ['./component-sibling1.component.css']
})
export class ComponentSibling1Component implements OnInit {

  message:string;

  constructor(
    private data: DataService
    ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }


}
