import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, Auth } from '../user.model';
import { Observable } from 'rxjs';
import { first,map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userId:Observable<string>;
  user:Observable<User>;

  constructor(private authService:AngularFireAuth, private firestore:AngularFirestore,private storage:AngularFireStorage) { 
    this.userId = authService.authState.pipe(
      map((user) => user ? user.uid : null)
    );
    this.user = new Observable<User>(subscriber => {
      this.userId.subscribe(id => {
        if(id){
          this.firestore.collection('users').doc(id).valueChanges().subscribe((user:User) => {
            subscriber.next(user);
          });
        }else {
          subscriber.next(null);
        }
      });
    });                
  }

  signup(email:string,password:string,auth:Auth): Promise<void>{
    return new Promise((resolve,reject) => {
      this.authService.auth.createUserWithEmailAndPassword(email,password).then(fireUser => {
        const user: User = {
          id:fireUser.user.uid,
          ...auth
        }
        this.setUser(user).then(() => resolve(), err => reject(err));
      }, err => reject(err));
    });
  }

  signin(email:string,password:string): Promise<User>{
    return new Promise((resolve,reject) => {
        this.authService.auth.signInWithEmailAndPassword(email,password).then( () => {
          this.user.pipe(first()).subscribe(user => resolve(user), err => reject(err));
        });
    });
  }


  logout() {
    this.authService.auth.signOut();
  }

  setUser(user:User): Promise<void>{
    return new Promise((resolve,reject) => {
      this.firestore.collection('users').doc(user.id).set(user).then(
        () => resolve(), err => reject(err)
      );
    });
  }

  setProfilPicture(file:File): Observable<number>{
    return new Observable<number>(subscriber => {
      this.userId.pipe(first()).subscribe(id => {
        const task = this.storage.ref('users/'+id+'/picture').put(file);
        task.percentageChanges().subscribe((percentage:number) => {
          subscriber.next(percentage);
        });
      });
    });
  }

}
