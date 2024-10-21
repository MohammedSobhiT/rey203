import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { VanillaTiltDirective } from '../../../directives/vanilla-tilt.directive';
import * as AOS from 'aos';
import { RouterModule } from '@angular/router';
import { ProductsService, Product } from '../../../services/products.service';
import { CartService, CartItem } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HeaderComponent, VanillaTiltDirective, RouterModule, CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit, AfterViewInit {
  favoriteProducts: Product[] = [];
  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('slide') slide!: ElementRef;
  currentIndex = 0;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.loadFavProducts();
    AOS.init({
      duration: 1200,
      once: true,
    });
  }
  loadFavProducts(): void {
    this.productsService.getFavoriteProducts().subscribe((products: Product[]) => {
      this.favoriteProducts = products;
    });
    console.log(this.favoriteProducts);
  }
  ngAfterViewInit(): void {
    this.initializeProductScroll();
  }

  initializeProductScroll(): void {
    const slider = this.slider.nativeElement;
    const slide = this.slide.nativeElement;
    const next = slider.querySelector('.pro-next');
    const prev = slider.querySelector('.pro-prev');

    next.addEventListener('click', () => this.moveSlide(1));
    prev.addEventListener('click', () => this.moveSlide(-1));
  }

  moveSlide(direction: number): void {
    const totalSlides = Math.ceil(this.favoriteProducts.length / 3);
    this.currentIndex =
      (this.currentIndex + direction + totalSlides) % totalSlides;
    this.updateSlidePosition();
  }

  updateSlidePosition(): void {
    const slide = this.slide.nativeElement;
    const slideWidth = slide.offsetWidth;
    slide.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;
  }
  addToCart(product: Product) {
    this.cartService.addToCart({ ...product, quantity: 1 }, 1);
  }
}
