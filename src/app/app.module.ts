import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './product-dashboard/product-widget/product-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewchildComponent,
    CounterComponent,
    ProductDashboardComponent,
    ProductWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
