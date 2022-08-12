import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PlatterComponent } from './platter/platter.component';
import { SaladComponent } from './salad/salad.component';
import { DealsComponent } from './deals/deals.component';
import { SixInchComponent } from './six-inch/six-inch.component';
import { FootLongComponent } from './foot-long/foot-long.component';
import { ComboComponent } from './combo/combo.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'register/login', redirectTo: '/login', pathMatch: 'full' },
  {path:'cart/login', redirectTo: '/login', pathMatch: 'full' },
  {path:'login/register', redirectTo: '/register', pathMatch: 'full' },
  {path:'cart/category', redirectTo: '/category', pathMatch: 'full' },
  {path:'login',component:LogInComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'category',component:CategoriesComponent},
  {path:'category/platter',component:PlatterComponent},
  {path:'category/salad',component:SaladComponent},
  {path:'category/deals',component:DealsComponent},
  {path:'category/sixinch',component:SixInchComponent},
  {path:'category/footlong',component:FootLongComponent},
  {path:'category/combo',component:ComboComponent},
  {path:'category/category',component:CategoriesComponent},
  {path:'cart',component:CartComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
