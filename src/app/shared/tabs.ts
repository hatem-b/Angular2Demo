import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare var $ : any;

@Directive({
  selector: '.tabs',
  inputs: [
    
  ],
  host: {
    //'(mouseenter)': 'onMouseEnter()',
    //'(mouseleave)': 'onMouseLeave()'
  }
})
export class Tabs implements OnInit {
  $element;

  constructor(private el: ElementRef) {
      

        //console.log((<any>window).jQuery,(<any>window).$,$);
      

      this.$element = $(el.nativeElement);
      //console.log("tabs", $.Velocity, $.velocity, this.$element, this.$element.velocity);
      
    }

    public ngOnInit() {
      
      //console.log(this.$element, $);
      this.$element.tabs();

    }
  onMouseEnter() {
    
  }
  onMouseLeave() {
    
  }
}