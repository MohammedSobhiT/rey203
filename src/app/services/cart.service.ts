import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemCountSource = new BehaviorSubject<number>(0);
  currentCartItemCount = this.cartItemCountSource.asObservable();

  private storageKey = 'cartItems';
  private cartItems: CartItem[] = [];

  constructor() {
    this.loadCartItems();
    this.updateCartItemCount();
  }

  private loadCartItems() {
    const items = localStorage.getItem(this.storageKey);
    this.cartItems = items ? JSON.parse(items) : [];
    this.updateCartItemCount();
  }

  private saveCartItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    this.updateCartItemCount();
  }

  private updateCartItemCount() {
    const itemCount = this.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.cartItemCountSource.next(itemCount);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const cartItem: CartItem = { ...product, quantity };
      this.cartItems.push(cartItem);
    }

    this.saveCartItems();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.saveCartItems();
  }

  clearCart() {
    this.cartItems = [];
    localStorage.removeItem(this.storageKey);
    this.updateCartItemCount();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((i) => i.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
      }
      this.saveCartItems();
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
    const taxRate = 0.1;
    const tax = subtotal * taxRate;
    return subtotal + tax;
  }

  applyCoupon(couponCode: string): number | null {
    const validCoupons: { [key: string]: number } = { SAVE10: 10, SAVE20: 20 };
    const discount = validCoupons[couponCode.toUpperCase()];
    return discount || null;
  }
}
