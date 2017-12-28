import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppRoutingModule } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { ProductServiceService } from './services/product-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    FilterComponent,
    ProductListComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
