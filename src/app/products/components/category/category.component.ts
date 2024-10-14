import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service'; // Import CartService

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  products: any[] = [];
  category: string = '';
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService // Inject CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.category = params['category'];
      this.products = this.productService.getProductsByCategory(this.category);
    });
  }

  addToWishlist(event: Event, product: any): void {
    event.preventDefault();
    this.productService.addToWishlist(product);
  }

  // Method to add product to cart
  addToCart(product: any): void {
    this.cartService.addToCart(product, this.quantity); // Add the product with the current quantity
  }
}