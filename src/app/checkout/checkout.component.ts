import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CartService, CartItem } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class CheckoutComponent implements OnInit {
  billingForm: FormGroup;
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  total: number = 0;
  couponCode: string = '';
  discount: number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    this.billingForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: [''],
      country: ['United Kingdom (UK)', Validators.required],
      streetAddress: ['', Validators.required],
      apartment: [''],
      townCity: ['', Validators.required],
      county: [''],
      postcode: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      createAccount: [false],
      orderNotes: [''],
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotals();
  }

  updateTotals(): void {
    this.subtotal = this.cartService.calculateTotal();
    this.total = this.cartService.calculateTotal();
  }

  applyCoupon(): void {
    const appliedDiscount = this.cartService.applyCoupon(this.couponCode);
    if (appliedDiscount) {
      this.discount = appliedDiscount;
      this.updateTotals();
      alert(`Coupon applied! You saved $${this.discount}.`);
    } else {
      alert('Invalid coupon code.');
    }
    this.couponCode = '';
  }

  onSubmit(): void {
    if (this.billingForm.valid) {
      // Process the order here (e.g., send it to the server)

      // Show SweetAlert after successful submission
      Swal.fire({
        title: 'Order Placed!',
        text: 'Your order has been successfully placed.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        // Clear the cart using the cart service
        this.cartService.clearCart(); // Ensure you have this method in your CartService

        // Reset the form and other variables
        this.billingForm.reset();
        this.cartItems = [];
        this.subtotal = 0;
        this.discount = 0;
        this.total = 0;
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }
}
