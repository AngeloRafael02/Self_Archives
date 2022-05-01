import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  //there are three ways to specify the selector, custom HTML tags, use it as a class attribute by adding a . before the name,
  //or square brackets around name to be an normal attribute to an html tag
  templateUrl: './child.component.html', //can be changes as "template" to bring html properties to the component.ts
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public name:string = "user";
  greetUser(){
    return "Hello, " + this.name;
  }
  public text:string= "Angelo"
  public SiteURL:string = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

}
//NOTES:
/*Input decorator(@Input()) for passing values from parent to child component
  OutPut decorator(@Output())
 */