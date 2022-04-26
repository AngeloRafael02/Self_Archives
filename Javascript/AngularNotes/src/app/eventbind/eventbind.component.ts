import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  template: `<button (click)="onClick($event)">greet</button> <!--format for event handler: (event)="function()"-->
              {{greetings}}
              <button (click)="greetings='HelloThere'">greet again</button>`,//we can just not assign an event handler if necessary
  styles: [``]
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public greetings = "";
  onClick(event:Event){
    console.log(event);
    this.greetings = event.type;
  }

}
