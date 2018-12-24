import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDummy2]'
})
export class Dummy2Directive {

  @HostBinding("attr.data-toggle") 
  value: string="";
  constructor() { }

  @HostListener("click")
  public onClick() {
    this.value = "dropdown";
  }

}
