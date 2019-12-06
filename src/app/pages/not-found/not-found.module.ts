import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [NotFoundPageComponent, NotFoundComponent, GameComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  exports: [ NotFoundPageComponent ]
})
export class NotFoundModule { }
