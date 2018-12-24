import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';



@Directive({
  selector: '[decimal]',
  host: {
      "(paste)": 'onPasted($event)',
      "(input)": 'onInputchange($event)'
  }
})

export class Decimal2Directive {
   a=1;
  private decimalnumberRegex: RegExp;

    @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
    value: string;

    @Input()
    decimalpoints: number;


    ngOnInit()
    {
      this.decimalnumberRegex = new RegExp("^\\d+\\.\\d{"+this.decimalpoints+"}$");
    }

    constructor(private elementRef: ElementRef) { }

  

    @HostListener('keypress', ['$event'])
    keypress(e: KeyboardEvent) {
        if (e.key !== undefined) {
            let parent = this;
            if ((e.which != 46 || parent.value.indexOf('.') != -1) && (e.which < 48 || e.which > 57)) {
                if ((e.which != 46 || parent.value.indexOf('.') != -1)) {
                    return false;
                }
                event.preventDefault();
            }
            if (parent.value != undefined && parent.value.indexOf(".") > -1 && (parent.value.split('.')[1].length > parent.decimalpoints - 1)) {
                event.preventDefault();
            }

        }
    }


    onPasted(e)
    {
      if (!(this.decimalnumberRegex.test(e.clipboardData.getData('text/plain')))||(this.elementRef.nativeElement.selectionStart>0)) {
        e.preventDefault();
      }
    }

    onInputchange($event) {
        this.value = $event.target.value;
    }

}
