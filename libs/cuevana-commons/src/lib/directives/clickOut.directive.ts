import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOut]'
})
export class ClickOutDirective {

  constructor(private _elementRef: ElementRef) { }

  @Output() clickOutside: EventEmitter<boolean> = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  onMouseEnter(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      // console.log('click outside directive');
      this.clickOutside.emit(true);
    }
  }

}
