import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: ` <div *ngFor="let color of colors; index as i; first as f; last as l; odd as o; even as e">
                <p>{{i}}. {{ color }} {{f}} {{l}} {{o}} {{e}}</p>
              </div>`,
  styles: [``]
})
export class NgForComponent implements OnInit {

  public colors:string[] = ["red","blue","green","yellow"];

  constructor() { }

  ngOnInit(): void {
  }

}
