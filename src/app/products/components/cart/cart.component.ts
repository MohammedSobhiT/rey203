import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../../services/cart.service';
import { ProductsService } from '../../../services/products.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  couponCode: string = ''; // line for the coupon code
  discount: number = 0; // line for discount
  recommendedItems: Product[] = [];
  cartItemCount: number = 0;

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.currentCartItemCount.subscribe(
      (count) => (this.cartItemCount = count)
    );
    this.fetchRandomRecommendedItems();
  }

  fetchRandomRecommendedItems() {
    const allProducts = this.productsService.getAllProducts();
    const randomIndices = new Set<number>();

    while (randomIndices.size < 2 && randomIndices.size < allProducts.length) {
      randomIndices.add(Math.floor(Math.random() * allProducts.length));
    }

    this.recommendedItems = Array.from(randomIndices).map(
      (index) => allProducts[index]
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart({ ...product, quantity: 1 }, 1); // Add with initial quantity 1
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Update local cart items
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = []; // Clear local cart items
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.cartItems = this.cartService.getCartItems(); // Update local cart items
  }
  calculateSubtotal(): number {
  return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
}

  applyCoupon() {
    const discount = this.cartService.applyCoupon(this.couponCode);
    if (discount) {
      this.discount = discount;
      alert(`Coupon applied! You saved $${this.discount}.`);
    } else {
      alert('Invalid coupon code.');
    }
    this.couponCode = ''; // Clear coupon code input after applying
  }

  getTotal() {
    return this.cartService.calculateTotal();
  }
}
