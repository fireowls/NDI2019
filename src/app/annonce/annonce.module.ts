import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceService } from './annonce.service';



@NgModule({
  declarations: [AnnonceComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AnnonceComponent,
    AnnonceService
  ]
})
export class AnnonceModule { }
