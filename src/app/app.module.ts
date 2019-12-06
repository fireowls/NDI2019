import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { GameComponent } from './pages/not-found/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
