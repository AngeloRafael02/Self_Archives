import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  //there are three ways to specify the selector, custom HTML tags, use it as a class attribute by adding a . before the name,
  //or square brackets around name to be an normal attribute to an html tag
  templateUrl: './child.component.html', //can be changes as "template" to bring html properties to the component.ts
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name = "user";
  greetUser(){
    return "Hello, " + this.name;
  }
  
  public SiteURL = window.location.href;

  @Input() text:string = "";

  @Output() greetEvent = new EventEmitter();
  callParentGreet(){
    this.greetEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
//NOTES:
/*Input decorator(@Input()) for passing values from parent to child component
  OutPut decorator(@Output())
 */