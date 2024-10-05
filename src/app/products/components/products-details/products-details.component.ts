import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  standalone: true,
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId: any; // Change to number for better type safety
  product: any;

  // Define all your product arrays here
  storageProducts = [
    {
      id: 1001,
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
      id: 1002,
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
      id: 1003,
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
      id: 1004,
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

  lightingProducts = [
    {
      id: 2001,
      name: 'Albert Ceiling Spotlight Bar, Charcoal',
      price: 289.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/28-800x652.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      id: 2002,
      name: 'Chicago Large Pendant, Green & Brass',
      price: 129.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/30-800x800.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      id: 2003,
      name: 'Gigi Tilting Pendant Chandelier Light',
      price: 89.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-13.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
    {
      id: 2004,
      name: 'Java Shade Small, Natural Rattan',
      price: 189.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/1-12.jpg',
      category: 'Lighting',
      status: 'in stock',
    },
  ];

  chairsProducts = [
    {
      imageUrl: '/assets/IMGS/chair1.jpg',
      name: 'Herman Arm Chair, Finch Grey Cotton',
      id: 3001,
      category: 'chairs',
      price: 199,
      status: 'in stock',
    },

    {
      imageUrl: '/assets/imgs/chair2.jpg',
      name: 'Knox Accent Chair, Natal Print',
      id: 3002,
      category: 'chairs',
      price: 399,
      status: 'in stock',
    },

    {
      imageUrl: '/assets/imgs/chair3.jpg',
      name: 'Osmond Armchair, Ink Blue Velvet',
      id: 3003,
      category: 'chairs',
      price: 280,
      status: 'in stock',
    },

    {
      imageUrl: '/assets/imgs/chair4.jpg',
      name: 'Lule Dining Chairs, Royal Yellow',
      id: 3004,
      category: 'chairs',
      price: 370,
      status: 'in stock',
    },

    {
      imageUrl: '/assets/Imgs/chair5.jpg',
      name: 'Stanley Accent Chair, Chestnut Brown',
      id: 3005,
      category: 'chairs',
      price: 280,
      status: 'in stock',
    },
  ];


  bedsProducts = [
    {
      id: 4001,
      name: 'Delia King Size Bed, Marine Velvet',
      price: 399.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/26.jpg',
      category: 'bed',
      status: 'in stock',
    },
    {
      id: 4002,
      name: 'Essentials Kano Platform Double Bed',
      price: 449.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/23.jpg',
      category: 'bed',
      status: 'in stock',
    },
    {
      id: 4003,
      name: 'Hyron Guest Bed with 2 Mattresses',
      price: 339.0, //after discount //before discount 449
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/25-600x450.jpg',
      category: 'bed',
      status: 'in stock',
    },
    {
      id: 4004,
      name: 'Kavaro 3000 Pocket Natural Kingsize',
      price: 489.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/22.jpg://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/25-600x450.jpg',
      category: 'bed',
      status: 'in stock',
    },
    {
      id: 4005,
      name: 'Roscoe King Size Bed, Aegean Blue',
      price: 429.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/24.jpg',
      category: 'bed',
      status: 'in stock',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id']; // Convert the ID to a number
      this.fetchProductDetails(this.productId);
    });
  }

  fetchProductDetails(id:number): void {
    // Collect all product arrays into a single array
    const allProducts = [
      ...this.storageProducts,
      ...this.lightingProducts,
      ...this.bedsProducts,
      ...this.chairsProducts,
      // Add more product arrays here as needed
    ];

    // Search for the product in the combined array
    this.product = allProducts.find((p) => p.id === id);

    // Handle case where product isn't found
    if (!this.product) {
      console.error('Product not found');
    }
  }
}
