import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NotFoundModule } from './pages/not-found/not-found.module';
import { GameComponent } from './pages/not-found/game/game.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';
=======
import { PagesModule } from './pages/pages.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
>>>>>>> dev

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
