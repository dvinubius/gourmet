import { Directive,
          ElementRef,
          OnInit,
          HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  stateDropped = false;

  constructor(private elRef: ElementRef) { }

  @HostListener('click') toggle() {
    this.stateDropped = !this.stateDropped;

    const target = this.elRef.nativeElement.parentElement;
    if (this.stateDropped) {
      target.classList.add('open');
    } else {
      target.classList.remove('open');
    }
  }


  ngOnInit() {
    // assuming that the dropdown is not open when component loads.
    // we could check here and initialize the this.stateDropped accordingly, though
  }
}
