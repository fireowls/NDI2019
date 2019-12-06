import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { GameComponent } from './game/game.component';
=======
<<<<<<< HEAD
import { NotFoundComponent } from './not-found/not-found.component';
>>>>>>> dev



@NgModule({
<<<<<<< HEAD
  declarations: [
    GameComponent
  ],
=======
  declarations: [NotFoundComponent],
=======
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NotFoundRoutingModule } from './not-found-routing.module';


@NgModule({
  declarations: [NotFoundPageComponent],
>>>>>>> ff64a4d4ff21bbb01d36d57bd0449955332616f6
>>>>>>> dev
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [ NotFoundPageComponent ]
})
export class NotFoundModule { }
