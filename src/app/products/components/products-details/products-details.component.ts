import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CartService, CartItem } from '../../../services/cart.service'; // Ensure CartItem is imported

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description?: string;
  status?: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number | null = null;
  product: Product | null = null;
  quantity: number = 1; // Set initial quantity to 1
  private readonly ERROR_PAGE_PATH = '/error';
  cartItems: CartItem[] = []; // Use CartItem type

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.fetchProductDetails();
    });

    this.cartItems = this.cartService.getCartItems(); // Load cart items in the same ngOnInit
  }

  private fetchProductDetails(): void {
    if (this.productId === null) {
      this.handleProductError('Product ID is null');
      return;
    }

    const product = this.productService.getProductById(this.productId);

    if (product !== null) {
      this.product = product;
    } else {
      this.handleProductError('Product not found');
    }
  }

  private handleProductError(message: string): void {
    console.error(message);
    this.router.navigate([this.ERROR_PAGE_PATH]);
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product, this.quantity); // Use existing product and quantity
      this.cartItems = this.cartService.getCartItems(); // Update local cart items
    }
  }

  // removeFromCart(productId: number) {
  //   this.cartService.removeFromCart(productId);
  //   this.cartItems = this.cartService.getCartItems(); // Update local cart items
  // }

  // clearCart() {
  //   this.cartService.clearCart();
  //   this.cartItems = []; // Clear local cart items
  // }

  // getTotal() {
  //   return this.cartService.calculateTotal(); // Call calculateTotal from the service
  // }

  // // Add this method to get the subtotal
  // calculateSubtotal() {
  //   return this.cartService.getSubtotal(); // Call getSubtotal from the service
  // }

  addToWishlist(event: Event): void {
    event.preventDefault();
    if (this.product) {
      this.productService.addToWishlist(this.product);
    }
  }
}
