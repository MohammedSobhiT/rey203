import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-chairs',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './chairs.component.html',
  styleUrl: './chairs.component.css',
})
export class ChairsComponent {
  chairsProducts = [
    {
      imageUrl: 'assets/imgs/chair1.jpg',
      name: 'Herman Arm Chair, Finch Grey Cotton',
      id: 3001,
      category: 'chairs',
      price: 199,
      status: 'in stock',
    },

    {
      imageUrl: 'assets/imgs/chair1.jpg',
      name: 'Knox Accent Chair, Natal Print',
      id: 3002,
      category: 'chairs',
      price: 399,
      status: 'in stock',
    },

    {
      imageUrl:  'assets/imgs/chair1.jpg',
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
      imageUrl: 'assets/imgs/chair5.jpg',
      name: 'Stanley Accent Chair, Chestnut Brown',
      id: 3005,
      category: 'chairs',
      price: 280,
      status: 'in stock',
    },
  ];
}
