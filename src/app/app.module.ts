import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './products/components/product-page/product-page.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductPipe } from './products/pipes/product.pipe';
import { MenuComponent } from './shared/components/menu/menu.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LearnObservablesComponent } from './shared/components/learn-observables/learn-observables.component';
import { ReqResPageComponent } from './reqres/components/req-res-page/req-res-page.component';
import { PersonCardComponent } from './reqres/components/person-card/person-card.component';
import { RandomPageComponent } from './random-users/random-page/random-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductListComponent,
    ProductPipe,
    MenuComponent,
    FooterComponent,
    LearnObservablesComponent,
    ReqResPageComponent,
    PersonCardComponent,
    RandomPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
