import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSampleService {

  constructor() { }

  getList(){
    return [
      {"id":1,"name":"Markus","age":18},
      {"id":2,"name":"Angel","age":20},
      {"id":3,"name":"Gary","age":19}
    ];
  }
}
