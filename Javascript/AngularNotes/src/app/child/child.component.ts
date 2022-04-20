import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() text = "";

  @Output() greetEvent = new EventEmitter();
  callParentGreet(){
    this.greetEvent.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
//NOTES:
/*Input decorator(@Input()) for passing values from parent to child component
  OutPut decorator(@Output())
 */