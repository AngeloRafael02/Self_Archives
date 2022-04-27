import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatereference',
  template: `<input #myLog type="text"> 
              <button (click)="logMessage(myLog.value)">log to console</button>`,
  styles: [``]
})
export class TemplatereferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //TEMPLATE REFERENCING: used to refer to an html element and allof its DOM properties, using the #variableName
  logMessage(myLog:string){
    console.log(myLog);
  }

}
