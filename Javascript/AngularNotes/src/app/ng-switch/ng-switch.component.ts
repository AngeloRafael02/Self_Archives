import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `<div [ngSwitch]="color">
                <div *ngSwitchCase="'red'">red</div>
                <div *ngSwitchCase="'blue'">blue</div>
                <div *ngSwitchCase="'yellow'">yellow</div>  
                <div *ngSwitchDefault>None</div>
            </div>

              `,
  styles: [``]
})
export class NgSwitchComponent implements OnInit {


  public color = "blue";
  constructor() { }

  ngOnInit(): void {
  }

}
