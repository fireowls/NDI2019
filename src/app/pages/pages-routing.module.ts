import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth/auth-page/auth-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfilPageComponent } from './profil/profil-page/profil-page.component';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component';

const routes: Route[] = [
    { path: 'home', component: HomePageComponent, loadChildren: './home/home.module#HomeModule' },
    { path: 'auth', component: AuthPageComponent, loadChildren: './auth/auth.module#AuthModule' },
    { path: 'profil', component: ProfilPageComponent, loadChildren: './profil/profil.module#ProfilModule' },
    { path: 'not-found', component: NotFoundPageComponent, loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModules { }
