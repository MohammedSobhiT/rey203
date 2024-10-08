import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css',
})
export class StorageComponent {
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
}

