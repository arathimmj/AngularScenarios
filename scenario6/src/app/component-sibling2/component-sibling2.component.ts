import { Component, OnInit } from '@angular/core';
import { DataService } from "../service/data.service";


@Component({
  selector: 'app-component-sibling2',
  templateUrl: './component-sibling2.component.html',
  styleUrls: ['./component-sibling2.component.css']
})
export class ComponentSibling2Component implements OnInit {

  message:string;
  public music = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)

  }

}
