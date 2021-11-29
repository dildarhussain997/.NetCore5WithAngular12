import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomInputFormatter]'
})
export class CustomInputFormatterDirective {

  @Input('format') format: any;
  constructor(private elRef: ElementRef) {
  }

  @HostListener('focus') onFocus() {
    console.log("on focus ");
  }

  @HostListener('blur') onBlur() {
    console.log("on blur ");

    let value: string = this.elRef.nativeElement.value;
    if (this.format == 'upperCase') {
      this.elRef.nativeElement.value = value.toUpperCase();
    } else if (this.format == 'lowerCase') {
      this.elRef.nativeElement.value = value.toUpperCase();
    }
  }



}
