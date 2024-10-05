import { Component, OnInit } from '@angular/core';
import { StorageComponent } from '../storage/storage.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [StorageComponent],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product: any; // You can define a Product interface for better type safety
  storageProducts = [
    {
      id: 1,
      name: 'Anderson Chest Of Drawers, Mocha',
      price: 99.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/18-800x534.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 2,
      name: 'Larsen Wide Chest Of Drawers',
      price: 189.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/20-800x800.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 3,
      name: 'Lucien Bedside, Light Mango Wood',
      price: 159.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/19-800x560.jpg',
      status: 'in stock',
      category: 'Storage',
    },
    {
      id: 4,
      name: 'Lucien Wide Chest of Drawers',
      price: 299.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/21.jpg',
      status: 'in stock',
      category: 'Storage',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the product ID from the route parameters
    this.route.params.subscribe((params) => {
      this.productId = +params['id']; // Convert the ID to a number
      this.fetchProductDetails(this.productId); // Fetch the product details
    });
  }

  fetchProductDetails(id: number): void {
    // Find the product in the products array
    this.product = this.storageProducts.find((p) => p.id === id);
  }
}
