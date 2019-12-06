import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceService } from './services/annonce.service';
import { NoteComponent } from './note/note.component';
import { FireModule } from '../fire/fire.module';


@NgModule({
  declarations: [AnnonceComponent, NoteComponent],
  providers: [ AnnonceService ],
  imports: [ CommonModule, FireModule],
  exports: [ AnnonceComponent, AnnonceService ]
})
export class AnnonceModule { }
