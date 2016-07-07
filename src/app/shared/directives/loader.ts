import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare function require(params:string): any;
var LOADER = require("./loader.html");
declare var $ : any;

@Directive({
  selector: '[loader]',
  inputs: [
    "waitFor",
  ],
  host: {
    //'(mouseenter)': 'onMouseEnter()',
    //'(mouseleave)': 'onMouseLeave()'
  }
})
export class Loader implements OnInit {
  $element;
  $loader = $(LOADER);

  set waitFor(condition: boolean) {
    if (!condition) {
                    this.$loader.show();
                    this.$element.before(this.$loader);
                    this.$element.hide();
                } else {
                  this.$loader.hide();
                        this.$element.fadeIn(1000);
                }
  }

  

  constructor(private el: ElementRef) {
      
       this.$element = $(el.nativeElement);
      
    }

    public ngOnInit() {
        

    }

    
  onMouseEnter() {
    

    
  }
  onMouseLeave() {
    
  }
}