import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../../services/cart.service'; 
import { ProductsService } from '../../../services/products.service'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

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
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // Add FormsModule here
  ],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; // Use CartItem type
  couponCode: any = ''; //  line for the coupon code
  discount: number = 0; // line for discount
  recommendedItems: any[] = [];
  productId: number | null = null;
  product: Product | null = null;
  quantity: number = 1; // Set initial quantity to 1
  cartItemCount: number = 0;
  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.fetchRandomRecommendedItems();
  }

  fetchRandomRecommendedItems() {
    const allProducts = this.productsService.getAllProducts(); // Fetch all products from your service
    const randomIndices = new Set<number>();

    // Generate 2 unique random indices
    while (randomIndices.size < 2 && randomIndices.size < allProducts.length) {
      randomIndices.add(Math.floor(Math.random() * allProducts.length));
    }

    // Map the indices to the products
    this.recommendedItems = Array.from(randomIndices).map(
      (index) => allProducts[index]
    );
  }
  addToCart(product: any) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      this.updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
 
  }
  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCartItems(); // Update local cart items
  
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = []; // Clear local cart items
  }

  calculateSubtotal() {
    return this.cartService.getSubtotal(); // Call getSubtotal from the service
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
    this.cartItems = this.cartService.getCartItems(); // Update local cart items
  }

  applyCoupon() {
    const discount = this.cartService.applyCoupon(this.couponCode); // Call the service method

    if (discount) {
      this.discount = discount;
      alert(`Coupon applied! You saved $${this.discount}.`);
    } else {
      alert('Invalid coupon code.');
    }

    this.couponCode = ''; // Clear coupon code input after applying
  }
  getTotal() {
    return this.cartService.calculateTotal(); // Call calculateTotal from the service
  }
}
