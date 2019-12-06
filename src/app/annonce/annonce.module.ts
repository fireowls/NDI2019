import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceService } from './annonce.service';
import { NoteComponent } from './note/note.component';



@NgModule({
  declarations: [AnnonceComponent, NoteComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AnnonceComponent,
    AnnonceService
  ]
})
export class AnnonceModule { }
