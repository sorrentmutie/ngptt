import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { ProductPageComponent } from './products/components/product-page/product-page.component';
import { ReqResPageComponent } from './reqres/components/req-res-page/req-res-page.component';
import { RandomPageComponent } from './random-users/random-page/random-page.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

const routes: Routes = [
  {path: "products", component: ProductPageComponent},
  {path: "reqres", component: ReqResPageComponent},
  {path: "random", component: RandomPageComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "", redirectTo: "welcome", pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
