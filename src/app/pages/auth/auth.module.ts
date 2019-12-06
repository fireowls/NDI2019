import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    AuthRoutingModule,
    CommonModule
  ],
  exports: [AuthPageComponent]
})
export class AuthModule { }
