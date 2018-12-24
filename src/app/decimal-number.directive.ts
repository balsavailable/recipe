import { Directive, forwardRef, ElementRef, HostListener } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Input } from '@angular/core';

@Directive({
  selector: '[decimalnumber]',
  host: {
    "(input)": 'onInputchange($event)'
  },
  providers: [{ provide: NG_VALIDATORS, useExisting: forwardRef(() => DecimalNumberDirective), multi: true }]
})

export class DecimalNumberDirective implements Validator { 


  private decimalnumberRegex: RegExp;
  private _decimalnumber: boolean = false;

  @Input() decimalplaces: string = "2"; // After Dot(.) Restriction
  @Input() numberplaces: string = "5"; // Maximum Number Place Before Dot(.) 
  @Input() isPercentage: boolean = false;// True then its shot act as percentage text box
  @Input() maxvalue: string;// Maximun Numberic Value
  @Input() minvalue: string;// Minimum Numberic Value

  constructor(private elementRef: ElementRef) { this.defaultValueSet(); }

  defaultValueSet() {
    if (this.elementRef.nativeElement.value == undefined || this.elementRef.nativeElement.value == null || this.elementRef.nativeElement.value == "") {
    
    }
  }

  validate(c: AbstractControl): { [key: string]: any } {
    this.defaultValueSet();
    if (c.value != undefined && c.value != null && c.value != "") {
      if (this.decimalnumberRegex.test(c.value)) {
        if (this.isPercentage) {
          if (c.value != undefined && c.value != null && (parseFloat(c.value) > 100)) {
            this.elementRef.nativeElement.classList["validationClass"] = "a20";
            return { validationMessage: "Invalid Percentage! Ex: 100 or 99.99" };
          }
        }
        else if (this.maxvalue != undefined && this.maxvalue != null) {
          if (c.value > this.maxvalue) {
            this.elementRef.nativeElement.classList["validationClass"] = "a16";
            return { validationMessage: "Decimal Number Is Exceeded! Max Value ( " + this.maxvalue + " )" };
          }
        }
        else if (this.minvalue != undefined && this.minvalue != null) {
          if (c.value < this.minvalue) {
            this.elementRef.nativeElement.classList["validationClass"] = "a17";
            return { validationMessage: "Decimal Number Is Lower! Min Value ( " + this.minvalue + " )" };
          }
        }
        this.elementRef.nativeElement.classList["validationClass"] = "";
        return null;
      } else {
        this.elementRef.nativeElement.classList["validationClass"] = "a3";
        return { validationMessage: "Invalid Decimal Number! Ex: 12 (or) 12.25" };
      }
    } else {
      return null;
    }
  }

  ngOnInit()
  {
    this.decimalnumberRegex = new RegExp("^\\d{1,"+this.numberplaces+"}\\.\\d{1,"+this.decimalplaces+"}$");
  }


  @HostListener('keypress', ['$event']) onKeyPress(event) {
    if (event.shiftKey == true) {
      event.preventDefault();
    }

    /* Percentgae Check */
    if (this.isPercentage) {
      if (event.target.value != undefined && event.target.value != null && (parseFloat(event.target.value) >= 100)) {
        event.preventDefault();
      }
    }
    
    /* Numeric Place Length Before Dot(.) */
    if (this.isPercentage == false && this.numberplaces != undefined && this.numberplaces != null && event.target.value != undefined && event.target.value != null) {
      let numberlength = event.target.value.split(".")[0];
      if (numberlength != undefined && numberlength != null) {
        if (numberlength.length > parseInt(this.numberplaces)) {
          event.preventDefault();
        }
      }
    }

    /* Maximum Numberic Value Check */
    if (this.isPercentage == false && this.maxvalue != undefined && this.maxvalue != null && event.target.value != undefined && event.target.value != null && (parseFloat(event.target.value) >= parseFloat(this.maxvalue))) {
      event.preventDefault();
    }

    if ((event.keyCode >= 48 && event.keyCode <= 57) ||
      event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 ||
      event.keyCode == 39 || event.keyCode == 46 || event.keyCode == 190) {

    } else {
      event.preventDefault();
    }

    if (event.target.value.indexOf('.') != -1 && (event.keyCode == 46))
      event.preventDefault();

    if (this.decimalplaces == null || this.decimalplaces == "") {
      this.decimalplaces = "3";
    }

    let valInFloat: number = parseFloat(event.target.value)
    let currentCursorPos: number = -1;
    if (typeof this.elementRef.nativeElement.selectionStart == "number") {
      currentCursorPos = this.elementRef.nativeElement.selectionStart;
    } else {
      console.log("This browser doesn't support selectionStart");
    }

    /*Decimal Length Check */
    let dotLength: number = event.target.value.replace(/[^\.]/g, '').length
    let decimalLength = event.target.value.split(".")[1] ? event.target.value.split(".")[1].length : 0;
    if (dotLength > 1 || (dotLength === 1 && event.key === ".") || (decimalLength > (parseInt(this.decimalplaces) - 1) &&
      currentCursorPos > event.target.value.indexOf(".")) && ["Backspace", "ArrowLeft", "ArrowRight"].indexOf(event.key) === -1) {
      event.preventDefault();
    }

    /* Percentgae Check */
    if (this.isPercentage) {
      if ( event.target.value != undefined && event.target.value != null && (parseFloat(this.insertString(event.target.value, event.key, event.target.selectionStart)) > 100))
       {
        event.preventDefault();
      }
    }

    /* Maximum Numberic Value Check */
    if (this.isPercentage == false && this.maxvalue != undefined && this.maxvalue != null && event.target.value != undefined && event.target.value != null && (event.keyCode >= 48 && event.keyCode <= 57)) {
      if ((parseFloat(event.target.value + event.key)) > parseFloat(this.maxvalue)) {
        event.preventDefault();
      }
    }

    /* Numeric Place Length Before Dot(.) */
    if (this.isPercentage == false && this.numberplaces != undefined && this.numberplaces != null && event.target.value != undefined && event.target.value != null) {
      var numberlength = (this.insertString(event.target.value, event.key, event.target.selectionStart)).split(".")[0];
      if (numberlength != undefined && numberlength != null) {
        if (numberlength.length > parseInt(this.numberplaces)) {
          event.preventDefault();
        }
      }
    }
  }


  insertString(a, b, at) 
  {
    var position = at;
    return a.substr(0, position) + b + a.substr(position);
}

  @HostListener('keyup', ['$event']) onKeyUp(event) {
    this.defaultValueSet();
  }

  /* Validate While Paste */
  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    if (!this.decimalnumberRegex.test(event.clipboardData.getData('text/plain'))||(this.elementRef.nativeElement.selectionStart>0)) {
      event.preventDefault();
    }
  }

  onInputchange(event) {

  }


}
