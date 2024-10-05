import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-beds',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './beds.component.html',
  styleUrl: './beds.component.css',
})
export class BedsComponent {
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
}
