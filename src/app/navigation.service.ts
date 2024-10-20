import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private history: string[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.addUrl(event.url);
      });
  }

  private addUrl(url: string) {
    if (
      this.history.length === 0 ||
      this.history[this.history.length - 1] !== url
    ) {
      this.history.push(url);
    }
    if (this.history.length > 2) {
      this.history.shift(); // Keep only the last two URLs
    }
  }

  getLastUrl(): string | null {
    return this.history.length > 0
      ? this.history[this.history.length - 1]
      : null;
  }

  getSecondToLastUrl(): string | null {
    return this.history.length > 1
      ? this.history[this.history.length - 2]
      : null;
  }
}
