import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  // @HostListener('focus') onfocus(){
  //   console.log("onFocus");

  // @HostListener('blur') onblur(){
  //   console.log("onBlur")
  //   }
  // }

  constructor(private el:ElementRef) { }
  @HostListener('blur') onblur(){
    // console.log("onBlur")
    let value:string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}
