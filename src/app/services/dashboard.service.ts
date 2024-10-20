import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: any;
  description: string;
  imageUrl: string;
  status: string;
  category: string;
}

export interface CartItem {
  id: number;
  name: string;
  brand: string;
  price: any;
  imageUrl: string;
  quantity: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private productsKey = 'products';
  private cartItemsKey = 'cartItems';

  constructor() {}

  loadProducts(): Product[] {
    const savedProducts = localStorage.getItem(this.productsKey);
    return savedProducts ? JSON.parse(savedProducts) : [];
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem(this.productsKey, JSON.stringify(products));
  }

  loadCartItems(): CartItem[] {
    const savedCartItems = localStorage.getItem(this.cartItemsKey);
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  }

  saveCartItems(cartItems: CartItem[]): void {
    localStorage.setItem(this.cartItemsKey, JSON.stringify(cartItems));
  }

  addProduct(newProduct: Product): void {
    const products = this.loadProducts();
    products.push(newProduct);
    this.saveProducts(products);
  }

  updateProduct(updatedProduct: Product): void {
    const products = this.loadProducts();
    const index = products.findIndex((p) => p.id === updatedProduct.id);
    if (index !== -1) {
      products[index] = updatedProduct;
      this.saveProducts(products);
    }
  }

  updateCartItem(updatedItem: CartItem): void {
    const cartItems = this.loadCartItems();
    const index = cartItems.findIndex((i) => i.id === updatedItem.id);
    if (index !== -1) {
      cartItems[index] = updatedItem;
      this.saveCartItems(cartItems);
    }
  }
}
