import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductPageComponent } from './products/components/product-page/product-page.component';
import { ReqResPageComponent } from './reqres/components/req-res-page/req-res-page.component';
import { RandomPageComponent } from './random-users/random-page/random-page.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { randomGuard } from './shared/guards/random.guard';

const routes: Routes = [
  {path: "products", component: ProductPageComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: "reqres", component: ReqResPageComponent},
  {path: "random", component: RandomPageComponent, canActivate: [randomGuard]},
  {path: "welcome", component: WelcomeComponent},
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
