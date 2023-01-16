import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlueEl]'
})
export class BlueElDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.backgroundColor = "blue";
    el.nativeElement.style.color = "red";
    el.nativeElement.innerHTML = "Hello, ";
  }
}
