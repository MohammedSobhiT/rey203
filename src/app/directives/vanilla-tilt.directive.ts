import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Directive({
  selector: '[appVanillaTilt]',
  standalone: true, // Set standalone to true
})
export class VanillaTiltDirective implements OnInit {
  @Input() tiltOptions: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    VanillaTilt.init(
      this.el.nativeElement,
      this.tiltOptions || {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 1,
      }
    );
  }
}
