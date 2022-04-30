import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `<p *ngIf="true">ngIf Sample</p> <!-- put false, and HTML is removed(not just display:none;)-->
              <p *ngIf="variable">ngIf Sample</p>  

              <p *ngIf="variable2; else elseBlock">ngIf Sample</p> 
              <ng-template #elseBlock>
              <p>else block</p>
              </ng-template>

              <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
              <ng-template #thenBlock>
                <p>Hi from Then Block</p>
              </ng-template>
              <ng-template #elseBlock>
                <p>Hi from Else Block</p>
              </ng-template>
              
              `,
  styles: [``]
})
export class NgIfComponent implements OnInit {

  variable:boolean = true; //variables can be used to bind to the ngIf directive
  variable2:boolean =false;
  displayName:boolean  = true;
  constructor() { }

  ngOnInit(): void {
  }

}
