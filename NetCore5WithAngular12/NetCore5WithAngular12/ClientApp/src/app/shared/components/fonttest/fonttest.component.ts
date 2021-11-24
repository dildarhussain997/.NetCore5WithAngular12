import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fonttest',
  templateUrl: './fonttest.component.html',
  styleUrls: ['./fonttest.component.css']
})
export class FonttestComponent implements OnInit {

  @Input() isFill: boolean | undefined = false; // @input declare that when ever this component is used somewhere as directive the value for this variable can be set at that time  as we are using in testcomponent
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isFill = !this.isFill;
  }
}
