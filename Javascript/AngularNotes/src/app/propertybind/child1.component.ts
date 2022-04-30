import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-child1', // dot before name = specified as class attribute
  template: ` <p>{{name}} works!</p> <!--double curly braces can evaluate expressions and concatenate strings-->
              <p> I sure hope it does </p>
              <input bind-disabled="isDisabled" [id]="myID" type="text" value="Angelo">
              <input [disabled]="isDisabled" id="{{myID}}" type="text" value="Angelo">`, //used template for simple html code, we can remove the component.html file. NOTE: replace single quotes with back-ticks for multiple HTML lines
  styles: [`p{
            font-decoration:none;
            }
          `] //use back-ticks in "styles:" to bring the css to the component.css
})
export class Child1Component implements OnInit {

  name:string = "child1";
  //NOTE: ATTRIBUTE-Initialized once in the HTML, never to be changes, PROPERTY; can be changed
  public myID:string = 'testId'; //PROPERTY BINDING: using [] or "bind-<attribute>" to bind attribute to an value inside the HTML tag, or use interpolation instead
  public isDisabled:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
