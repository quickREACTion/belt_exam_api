import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';

// const routes: Routes = [
//   {path: 'products', children: [
//     {path: "", pathMatch: 'full', component: ProductsComponent},
//     {path: 'new', component: NewComponent},
//     {path: 'edit/:id', component: EditComponent},
//     {path: 'review/:id', component: ReviewComponent},
//   ]},
//   {path: "**", redirectTo: "/products"}
// ];


const routes: Routes = [
  {path: 'products/new', component: NewComponent},
  {path: 'products/:id/edit', component: EditComponent},
  {path: 'products/:id', component: ReviewComponent},
  {path: '', pathMatch: 'full', component: ProductsComponent},
  {path: '**', redirectTo: '/'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
