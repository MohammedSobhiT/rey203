import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { LandingComponent } from './products/components/landing/landing.component';
import { StorageComponent } from './products/components/storage/storage.component';
import { SofasComponent } from './products/components/sofas/sofas.component';
import { ChairsComponent } from './products/components/chairs/chairs.component';
import { BedsComponent } from './products/components/beds/beds.component';
import { LightingComponent } from './products/components/lighting/lighting.component';
import { NotFoundComponent } from './products/components/not-found/not-found.component';
import { TablesComponent } from './products/components/tables/tables.component';
import { SaleComponent } from './products/components/sale/sale.component';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'sofas', component: SofasComponent },
  { path: 'beds', component: BedsComponent },
  { path: 'chairs', component: ChairsComponent },
  { path: 'lighting', component: LightingComponent },
  { path: 'not found', component: NotFoundComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'sale', component: SaleComponent },


  { path: "" ,redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', redirectTo: 'not found', pathMatch: 'full' },
];
