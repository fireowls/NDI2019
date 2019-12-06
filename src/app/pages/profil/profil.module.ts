import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { ProfilRoutingModule } from './profil-routing.module';



@NgModule({
  declarations: [ProfilPageComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ],
  exports: [ProfilPageComponent]
})
export class ProfilModule { }
