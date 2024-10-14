import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  quantity: number; // Ensure to include quantity for cart items
}

@Injectable({
  providedIn: 'root', // Makes this service available across the app
})
export class CartService {
  private cartItemCountSource = new BehaviorSubject<number>(0);
  currentCartItemCount = this.cartItemCountSource.asObservable();

 
  private storageKey = 'cartItems'; // Key for localStorage
  private cartItems: CartItem[] = []; // Use CartItem type

  constructor() {
    this.loadCartItems(); // Load items from localStorage on service initialization
  }

  private loadCartItems() {
    const items = localStorage.getItem(this.storageKey);
    this.cartItems = items ? JSON.parse(items) : [];
  }

  private saveCartItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If item already exists, update its quantity
      existingItem.quantity += quantity;
    } else {
      // If item does not exist, add it as a new item
      const cartItem: CartItem = { ...product, quantity }; // Ensure cartItem is of CartItem type
      this.cartItems.push(cartItem);
    }

    this.saveCartItems(); // Save updated cart to localStorage
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.saveCartItems(); // Save updated cart to localStorage
  }

  clearCart() {
    this.cartItems = [];
    localStorage.removeItem(this.storageKey); // Clear localStorage
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((i) => i.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId); // Remove item if quantity is zero or less
      } else {
        item.quantity = quantity; // Update the quantity
      }
      this.saveCartItems(); // Save updated cart to localStorage
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total: number, item: CartItem) => total + item.price * item.quantity,
      0
    );
  }

  getSubtotal(): number {
    return this.getTotalPrice();
  }

  calculateTotal(): number {
    const subtotal = this.getSubtotal();
    const taxRate = 0.1; // Adjust this value as needed
    const tax = subtotal * taxRate; // Calculate tax
    return subtotal + tax; // Return total (subtotal + tax)
  }
  applyCoupon(couponCode: string): number | null {
    const validCoupons: { [key: string]: number } = { SAVE10: 10, SAVE20: 20 }; // Define valid coupons and their discounts
    const discount = validCoupons[couponCode.toUpperCase()]; // Use toUpperCase to handle case-insensitive coupon codes

    return discount || null; // Return discount or null if invalid
  }
}
