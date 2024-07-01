import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appSmoothScroll]'
})
export class SmoothScrollDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    const targetId = this.el.nativeElement.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
