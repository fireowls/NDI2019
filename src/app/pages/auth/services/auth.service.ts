import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId:Observable<string>;
  user:Observable<User>;

  constructor(private authService:AngularFireAuth,
              private firestore:AngularFirestore) { }

  signup(email:string,password:string,user:User): Promise<void>{
    return new Promise((resolve,reject) => {
      this.authService.auth.createUserWithEmailAndPassword(email,password).then(fireUser => {
        const users: User = {

        }
      });
    });
  }

  signin(email:string,password:string): Promise<void>{
    return new Promise((resolve,reject) => {

    });
  }
}
