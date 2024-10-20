import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './products/components/cart/cart.component';
import { LandingComponent } from './products/components/landing/landing.component';
import { NotFoundComponent } from './products/components/not-found/not-found.component';
import { SaleComponent } from './products/components/sale/sale.component';
import { CategoryComponent } from './products/components/category/category.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { DashboardComponent } from './dashboard/components/manage-orders/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'cart', component: CartComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
