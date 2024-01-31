import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProductPageComponent } from "./products/components/product-page/product-page.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { ProductPipe } from "./products/pipes/product.pipe";
import { MenuComponent } from "./shared/components/menu/menu.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LearnObservablesComponent } from "./shared/components/learn-observables/learn-observables.component";
import { ReqResPageComponent } from "./reqres/components/req-res-page/req-res-page.component";
import { PersonCardComponent } from "./reqres/components/person-card/person-card.component";
import { RandomPageComponent } from "./random-users/random-page/random-page.component";
import { FirstInterceptor } from "./shared/interceptors/first.interceptor";
import { SecondInterceptor } from "./shared/interceptors/second.interceptors";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { ProductDetailsComponent } from "./products/components/product-details/product-details.component";
import { CustomersPageComponent } from "./customers/customers-page/customers-page.component";
import { SpinnerComponent } from "./shared/components/spinner/spinner.component";
import { EventBusComponent } from "./shared/components/event.bus/event.bus.component";
import { MyNotificationComponent } from './shared/components/my-notification/my-notification.component';
import { HeroTemplateFormComponent } from './heroes/components/hero-template-form/hero-template-form.component';
import { HeroReactiveFormComponent } from './heroes/components/hero-reactive-form/hero-reactive-form.component';
import { SignalPageComponent } from './signals/components/signal-page/signal-page.component';
import { PlaceholderPageComponent } from './placeholder/components/placeholder-page/placeholder-page.component';

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
    RandomPageComponent,
    NotFoundComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    CustomersPageComponent,
    SpinnerComponent,
    EventBusComponent,
    MyNotificationComponent,
    HeroTemplateFormComponent,
    HeroReactiveFormComponent,
    SignalPageComponent,
    PlaceholderPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
