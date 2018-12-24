import { Directive, ElementRef, Renderer2, OnInit, Host, HostListener, HostBinding, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('appHighlight') set val(val:boolean)
  {
    if(!val)
    {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.vcRef.clear();
    }
  }

  ngOnInit(): void {
    
  }

  constructor(private templateRef:TemplateRef<any>, private vcRef: ViewContainerRef) {

  }

 

}
