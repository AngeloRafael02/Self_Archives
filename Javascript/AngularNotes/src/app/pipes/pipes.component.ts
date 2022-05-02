import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: ` <p>{{name}}</p>
              <p>{{name | lowercase}}</p>
              <p>{{name | uppercase}}</p>
              <p>{{name | titlecase}}</p>
              <p>{{name | slice:6:10 | titlecase}}</p>
              
              <p>{{obj}}</p>
              <p>{{obj | json}}</p>
              
              <p>{{5.678 | number:"1.2-3"}}</p><!--number:(number of integers).(minimum number of decimals)-(maximum number of decimals)-->
              <p>{{5.678 | number:"3.4-5"}}</p>
              <p>{{5.678 | number:"2.1-2"}}</p>
              
              <p>{{0.25 | percent}}</p>
              <p>{{0.25 | currency}}</p>
              <p>{{0.25 | currency:'GBP'}}</p>
              <p>{{0.25 | currency:'GBP': 'code'}}</p>
              
              <p>{{date}}</p>
              <p>{{date | date:'short'}}</p>
              <p>{{date | date:'shortDate'}}</p>
              <p>{{date | date:'shortTime'}}</p>
              <p>{{date | date:'medium'}}</p>
              <p>{{date | date:'mediumDate'}}</p>
              <p>{{date | date:'mediumTime'}}</p>
              <p>{{date | date:'long'}}</p>
              <p>{{date | date:'longDate'}}</p>
              <p>{{date | date:'longTime'}}</p>  `,
  styles: [``]
})
export class PipesComponent implements OnInit {

  public name:string = "aNgElO rAfAeL";
  public obj = {
    "color":"red",
    "animal":"dog",
    "sound":"woof"
  }
  public date:Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
