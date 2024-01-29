import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductPageComponent } from './products/components/product-page/product-page.component';
import { ReqResPageComponent } from './reqres/components/req-res-page/req-res-page.component';
import { RandomPageComponent } from './random-users/random-page/random-page.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { randomGuard } from './shared/guards/random.guard';
import { NotAuthorisedComponent } from './shared/components/not-authorised/not-authorised.component';
import { specialGuard } from './shared/guards/special.guard';
import { NotAvailableComponent } from './shared/components/not-available/not-available.component';
import { CreateProductComponent } from './products/components/create-product/create-product.component';
import { EditProductComponent } from './products/components/edit-product/edit-product.component';

const routes: Routes = [
  {path: "products", component: ProductPageComponent, children: [
    {
      path: "create", component: CreateProductComponent
    },
    {
      path: "edit", component: EditProductComponent
    },
  ],
    title: 'pagina dei prodotti'},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: "reqres", component: ReqResPageComponent, canActivate: [randomGuard, specialGuard]},
  {path: "not-available", component: NotAvailableComponent},
  {path: "random", component: RandomPageComponent, canActivate: [randomGuard]},
  {path: "welcome", component: WelcomeComponent},
  {path: "not-authorised", component: NotAuthorisedComponent},
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
