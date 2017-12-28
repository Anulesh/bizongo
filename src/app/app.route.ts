import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
 
 
 
 
 
 
export const appRoutes: Routes = [
    { path: '', component: AppComponent }
 ];
 
 @NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
 
export class AppRoutingModule { }