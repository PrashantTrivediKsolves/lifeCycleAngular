import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { CounterComponent } from './viewchild/counter/counter.component';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductWidgetComponent } from './product-dashboard/product-widget/product-widget.component';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { HeadersInterceptor } from './headers.interceptor';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { LoggingInterceptor } from './logging.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    ViewchildComponent,
    CounterComponent,
    ProductDashboardComponent,
    ProductWidgetComponent,
    HttpInterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
