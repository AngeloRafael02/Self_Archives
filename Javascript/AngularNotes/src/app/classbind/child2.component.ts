import { Component,OnInit } from "@angular/core";

@Component({
    selector: 'app-child2',
    template:`<h2> Welcome {{name1}} </h2>
            <h2 class="text-success"> More text</h2>
            <h2 [class]="successClass"> More text</h2>
            <h2 [class.text-danger]="hasError"> More text</h2>
            <h2 [ngClass]="messageClasses"> More text</h2>`,
    styles: [`.text-success{color: green;}
            .text-danger{color: red;}
            .text-special{font-style:italic;}`]
})
export class Child2Component implements OnInit{
    //CLASS BINDINGS: can be used for dynamically changing the class attributes of the HTML elements
    public name1 = "User";
    public successClass = "text-success"
    public hasError = false;
    public isSpecial = true;
    public messageClasses = {
        "text-success": !this.hasError,
        "text-danger":  this.hasError,
        "text-special": this.isSpecial
    }

    ngOnInit(){

    }
}