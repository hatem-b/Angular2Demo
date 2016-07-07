//import 'jquery';

//import * as $ from 'jquery';

import { Directive, ElementRef, Input, OnInit } from '@angular/core';
//import { jQuery } from 'jquery/dist/jquery.min';
//declare var $:JQueryStatic;



@Directive({
  selector: 'img.materialboxed',
  inputs: [
    
  ],
  host: {
    //'(mouseenter)': 'onMouseEnter()',
    //'(mouseleave)': 'onMouseLeave()'
  }
})
export class ImageBox implements OnInit {
  
  constructor(private el: ElementRef) {
      
    }

    public ngOnInit() {
      
      (<any>window).$(this.el.nativeElement).materialbox();
    }
  onMouseEnter() {
    
  }
  onMouseLeave() {
    
  }
}