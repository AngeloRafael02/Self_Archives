import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `<p>{{numHour}}:{{numMinute}}:{{numSecond}}</p>`,
  styles: [``]
})
export class TimerComponent implements OnInit {


  constructor() { 

  }
  ngOnInit(): void {

  }
  
  private getResetDay():Date{
    var now:Date = new Date();
        var ResetDay = new Date();
            ResetDay.setDate(now.getDate() + (8 - 1 - now.getDay() + 7) % 7 + 1); //Monday
            ResetDay.setHours(4, 0, 0, 0); //4:00 AM
        return ResetDay;
  }
  private now:number = new Date().getTime();
  private deadLine:number = new Date(this.getResetDay()).getTime();
  private gap:number = this.deadLine - this.now;

  private second:number = 1000;
  private minute:number = this.second * 60;
  private hour:number = this.minute * 60;
  private day:number = this.hour * 24;

  public numDay:number = Math.floor(this.gap / this.day);
  public numHour:number = Math.floor((this.gap % this.day) / this.hour);
  public numMinute:number = Math.floor((this.gap % this.hour) / this.minute);
  public numSecond:number = Math.floor((this.gap % this.minute) / this.second);

    //NOTE: figure out how to loop this properties, make the structure similar to the clock component?
  public strDay:string = this.numDay.toLocaleString();
  public strHour:string = this.numHour.toLocaleString();
  public strMinute:string = this.numMinute.toLocaleString();
  public strSecond:string = this.numSecond.toLocaleString();

  

}
