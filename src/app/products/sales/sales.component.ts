import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule, RouterLink,FormsModule,ReactiveFormsModule],
})
export class SalesComponent implements OnInit {
  saleProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadSaleProducts();
  }

  loadSaleProducts(): void {
    this.productsService.getSaleProducts().subscribe((products: Product[]) => {
      this.saleProducts = products;
    });
    console.log(this.saleProducts);
  }

  addToCart(product: Product): void {
    // Implement add to cart functionality
    console.log('Adding to cart:', product);
  }
}
