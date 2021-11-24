import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fonttest',
  templateUrl: './fonttest.component.html',
  styleUrls: ['./fonttest.component.css']
})
export class FonttestComponent implements OnInit {

  @Input() isFill: boolean | undefined = false; // @input declare that when ever this component is used somewhere as directive the value for this variable can be set at that time  as we are using in testcomponent

  // normally you have to use camel case for naming variable because is-Showable is not allowed in javascript
  // and some time if we change varibale name here and dont change it where the coomponent is used then out app will be broken
  // to avoid these two problems we use aliase that is name for variabe with quotation @input('is-Showable'), so when we want to pass data to this vairbale from somewhere else then we will use aliase there too 
  @Input('is-Showable') isShowable: boolean | undefined = false;

  // @output keyword is similar to input keyword, its used to send data form component to outside another component
  // eventemitter will raise an event 
  @Output('event-Happend') eventHappend = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFill = !this.isFill;
  }

  onClickOut() {
    console.log("log message from component fonttest ");
    this.eventHappend.emit();
  }
}
