import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuotehighlighter]'
})
export class QuotehighlighterDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
    this.textDeco("blue")
  }

  @HostListener('dbclick') onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.color=action;
  }
}
