import { ProductFilterPipe } from './shared/product-filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppRoutingModule } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './services/product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductListComponent,
    ProductFilterPipe
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
