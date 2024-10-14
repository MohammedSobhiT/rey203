import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { VanillaTiltDirective } from '../../../directives/vanilla-tilt.directive';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ HeaderComponent, VanillaTiltDirective, RouterModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'], // <-- Corrected styleUrls
})
export class LandingComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });

    this.productScroll(); // Call the productScroll function
  }

  productScroll() {
    let slider = document.getElementById('slider') as HTMLElement;
    let next = document.getElementsByClassName(
      'pro-next'
    ) as HTMLCollectionOf<HTMLElement>;
    let prev = document.getElementsByClassName(
      'pro-prev'
    ) as HTMLCollectionOf<HTMLElement>;
    let slide = document.getElementById('slide') as HTMLElement;
    let item = document.getElementById('slide') as HTMLElement;

    for (let i = 0; i < next.length; i++) {
      let position = 0; // Slider position

      prev[i].addEventListener('click', () => {
        if (position > 0) {
          position -= 2;
          this.translateX(position, slide);
        }
      });

      next[i].addEventListener('click', () => {
        if (position >= 0 && position < this.hiddenItems(slider, item)) {
          position += 2;
          this.translateX(position, slide);
        }
      });
    }
  }

  hiddenItems(slider: HTMLElement, item: HTMLElement): number {
    let items = this.getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }

  translateX(position: number, slide: HTMLElement): void {
    slide.style.left = position * -210 + 'px';
  }

  getCount(parent: HTMLElement, getChildrensChildren: boolean): number {
    let relevantChildren = 0;
    let children = parent.childNodes.length;
    for (let i = 0; i < children; i++) {
      if (parent.childNodes[i].nodeType !== 3) {
        if (getChildrensChildren) {
          relevantChildren += this.getCount(
            parent.childNodes[i] as HTMLElement,
            true
          );
        }
        relevantChildren++;
      }
    }
    return relevantChildren;
  }
}
