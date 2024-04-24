import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {


  constructor(public el:ElementRef) {

   }

  @HostBinding("style.backgroundColor") 
   bgColor = "red";

  @HostListener("mouseenter")
  changeFontsize(){
    console.log("Mouse enter");
    this.el.nativeElement.style.fontSize = "50px"
  }

  @HostListener("mouseleave")
   resetFontsize(){
     console.log("Mouse leave");
      this.el.nativeElement.style.fontSize = "30px"
   }

}
