import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-child1', // dot before name = specified as class attribute
  template: ` <p>{{name}} works!</p> <!--double curly braces can evaluate expressions and concatenate strings-->
              <p> I sure hope it does </p>`, //used template for simple html code, we can remove the component.html file. NOTE: replace single quotes with back-ticks for multiple HTML lines
  styles: [`p{
            font-decoration:none;
            }
          `] //use back-ticks in "styles:" to bring the css to the component.css
})
export class Child1Component implements OnInit {

  name = "child1";
  constructor() { }

  ngOnInit(): void {
  }

}
