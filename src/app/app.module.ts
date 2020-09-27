import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImgserviceService } from './imgservice.service'

import { AppRoutingModule,routerComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './gallery/animals/animals.component';
import { FoodComponent } from './gallery/food/food.component';
import { NatureComponent } from './gallery/nature/nature.component';
import { ToysComponent } from './gallery/toys/toys.component';
//import { ImagedetailsComponent } from './gallery/imagedetails/imagedetails.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { ImgDetailComponent } from './img-detail/img-detail.component';
// import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    routerComponent,
    AnimalsComponent,
    FoodComponent,
    NatureComponent,
    ToysComponent,
    //ImagedetailsComponent,
    // NavbarComponent,
    // GalleryComponent,
    // ImgDetailComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
