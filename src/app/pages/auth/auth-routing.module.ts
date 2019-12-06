import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';

const routes: Route[] = [
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
