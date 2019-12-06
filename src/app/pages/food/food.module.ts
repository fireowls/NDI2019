import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRoutingModule } from './food-routing.module';
import { FoodPageComponent } from './food-page/food-page.component';
import { AnnonceModule } from 'src/app/annonce/annonce.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FoodPageComponent],
  imports: [
    CommonModule,
    AnnonceModule,
    FoodRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FoodModule { }
