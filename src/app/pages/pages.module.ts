import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ProfilModule } from './profil/profil.module';
import { PagesRoutingModules } from './pages-routing.module';
import { FoodModule } from './food/food.module';

const modules = [
  AuthModule,
  HomeModule,
  NotFoundModule,
  ProfilModule,
  FoodModule,
  PagesRoutingModules
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ]
})
export class PagesModule { }
