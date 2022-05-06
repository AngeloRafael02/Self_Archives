import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wildcard-route',
  template: `
    <p>
      Error 404: Page Not Found.
    </p>
  `,
  styles: [
  ]
})
export class WildcardRouteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
