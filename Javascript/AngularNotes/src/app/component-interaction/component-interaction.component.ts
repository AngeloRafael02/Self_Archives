import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  template: `
          <p>{{"Hello " + name + " from parent Component by child component"}}</p>
          <button (click)="fireEvent()">Send event to parent</button>`,
  styles: [``]
})
export class ComponentInteractionComponent implements OnInit {

  //@Input(): passing data from parent component to child component
  @Input('parentData') public name:string="";
  //Alternative format: @Input() public parentData:string=""; (HTML: <p>{{parentData}}</p>)

  //@Output(): passing data from the child component to the parent component(using events)
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit("Hello from child component to parent component");
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
