import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import * as AOS from 'aos';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LandingComponent } from "./products/components/landing/landing.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    CommonModule,
    NgFor,
    FooterComponent,
    LandingComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Rey203';

  ngOnInit(): void {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }
}

