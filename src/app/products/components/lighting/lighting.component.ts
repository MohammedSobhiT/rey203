import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lighting',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lighting.component.html',
  styleUrl: './lighting.component.css',
})
export class LightingComponent {
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
}
