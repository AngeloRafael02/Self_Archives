import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebind',
  template: `<h3>{{text}}</h3>
            <h3 [style.color]="hasError ? 'red' :'green'">sample</h3>
            <h3 [style.color]="color">sample2</h3>
            <h3 [ngStyle]="titleStyles">sample3</h3>`,
  styles: [``]
})
export class StylebindComponent implements OnInit {
  //STYLE BINDING
  public text = "StyleBind"
  public hasError = false; //sample
  public color = 'orange'; //sample2
  public titleStyles = { //sample3
    color:"blue",
    fontStyle: "italic",
    fontWeight:100
  }
  constructor() { }

  ngOnInit(): void {
  }

}
