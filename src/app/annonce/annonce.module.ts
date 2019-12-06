import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnonceComponent } from './annonce/annonce.component';
import { AnnonceService } from './services/annonce.service';
import { NoteComponent } from './note/note.component';
import { FireModule } from '../fire/fire.module';
import { AnnonceListComponent } from './annonce-list/annonce-list.component';


@NgModule({
  declarations: [AnnonceComponent, NoteComponent, AnnonceListComponent],
  imports: [ CommonModule, FireModule],
  exports: [ AnnonceListComponent ],
  providers: [ AnnonceService ]
})
export class AnnonceModule { }
