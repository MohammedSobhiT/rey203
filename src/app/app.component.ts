import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import * as AOS from 'aos';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { Router } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
   
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Rey203';
  constructor(private router: Router) {}
  shouldDisplayHeaderFooter(): boolean {
    return (
      !this.router.url.includes('/auth')&&
      
      !this.router.url.includes('/dashboard')
      
    );
  }
  
  ngOnInit(): void {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }
}

