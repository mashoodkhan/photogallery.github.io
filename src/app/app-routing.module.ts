import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './error/error.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AnimalsComponent } from './gallery/animals/animals.component';
import { FoodComponent } from './gallery/food/food.component';
import { NatureComponent } from './gallery/nature/nature.component';
import { ToysComponent } from './gallery/toys/toys.component';



const routes: Routes = [
 
 {path:"", redirectTo:"gallery",pathMatch:'full'},
 {path:"gallery", component:GalleryComponent},
 {path:"animals", component:AnimalsComponent},
 {path:"food", component:FoodComponent},
 {path:"nature", component:NatureComponent},
 {path:"toys", component:ToysComponent},
 {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routerComponent = 
[
  NavbarComponent,
  GalleryComponent,
  AnimalsComponent,
  FoodComponent,
  NatureComponent,
  ToysComponent,
  ErrorComponent
]
