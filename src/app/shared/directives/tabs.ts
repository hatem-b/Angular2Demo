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
      

       this.$element = $(el.nativeElement);
      
    }

    public ngOnInit() {
      
      this.$element.tabs();

    }
  onMouseEnter() {
    
  }
  onMouseLeave() {
    
  }
}