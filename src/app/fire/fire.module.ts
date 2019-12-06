import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const fire = [AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFirestoreModule];

@NgModule({
  imports: [
    fire
  ],
  exports: [
    fire
  ]
})
export class FireModule { }
