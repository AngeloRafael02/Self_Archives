import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { peopleInterface } from './people';

@Injectable({
  providedIn: 'root'
})
export class ServiceSampleService {

  private _url:string = "/assets/data/people.json";

  constructor(private http:HttpClient) { }

  getList():Observable<peopleInterface[]>{
    return this.http.get<peopleInterface[]>(this._url);
  }
}
