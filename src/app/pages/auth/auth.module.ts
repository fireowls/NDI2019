import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { FireModule } from 'src/app/fire/fire.module';



@NgModule({
  declarations: [AuthPageComponent,LoginPageComponent,RegisterPageComponent],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FireModule
  ],
  exports: [AuthPageComponent],
  providers: [AuthService]
})
export class AuthModule { }
