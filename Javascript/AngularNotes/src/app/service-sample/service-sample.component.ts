import { Component, OnInit } from '@angular/core';
import { peopleInterface } from '../people';
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

  public peoples:peopleInterface[] = [];
  constructor(public _sampleService:ServiceSampleService) { }

  ngOnInit(): void {
    this._sampleService.getList()
        .subscribe(data => this.peoples = data);
  }

}
