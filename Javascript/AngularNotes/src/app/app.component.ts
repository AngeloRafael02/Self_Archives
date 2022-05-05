import { Component } from '@angular/core';
import {ServiceSampleService} from './service-sample.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'AngularNotes';

  public currentItem:string = "help";

  public name:string = "Angelo";

  public message:string ="";
  
  greet(){
    alert("Hello Angelo");
  }
  
  constructor(private ServiceSampleService:ServiceSampleService){

  }

}
