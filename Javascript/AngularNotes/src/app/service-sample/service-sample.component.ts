import { Component, OnInit } from '@angular/core';
import { ServiceSampleService } from '../service-sample.service';

@Component({
  selector: 'app-service-sample',
  template: `<ul *ngFor = "let people of peoples">
                <li>{{people.id}}, {{people.name}},{{people.age}}</li>
              </ul>
              <p>JSON format: {{peoples | json }}</p>
              `,
  styles: [``]
})
export class ServiceSampleComponent implements OnInit {

  public peoples:any[] = [];
  constructor(public _sampleService:ServiceSampleService) { }

  ngOnInit(): void {
    this.peoples = this._sampleService.getList();
  }

}
