import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-storage',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css',
})
export class StorageComponent {
  storageProducts = [
    {
      id: 1,
      name: 'Anderson Chest Of Drawers, Mocha',
      price: 99.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/18-800x534.jpg',
      category: 'Storage',
    },
    {
      id: 2,
      name: 'Larsen Wide Chest Of Drawers',
      price: 189.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/20-800x800.jpg',
      category: 'Storage',
    },
    {
      id: 3,
      name: 'Lucien Bedside, Light Mango Wood',
      price: 159.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/19-800x560.jpg',
      category: 'Storage',
    },
    {
      id: 4,
      name: 'Lucien Wide Chest of Drawers',
      price: 299.0,
      description:
        'Proactively communicate corporate process improvements via corporate scenarios. Progressively aggregate proactive data after diverse users. Rapidiously redefine front-end interfaces before go forward process improvements.',
      imageUrl:
        'https://demos.reytheme.com/beijing/wp-content/uploads/sites/7/2019/06/21.jpg',
      category: 'Storage',
    },
  ];
}

