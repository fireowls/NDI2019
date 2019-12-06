import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { AnnonceItem } from '../models/annonce-item.model';
import { AnnonceType } from '../models/annonce-type.model';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  listAnnonce: Observable<AnnonceItem[]>;

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) { 
    this.listAnnonce = new Observable<AnnonceItem[]>(subscriber => {
      this.firestore.collection<AnnonceItem>('annonces').valueChanges().subscribe((annonce) => {
        subscriber.next(annonce);
      });
    });
  }

  add(annonce: AnnonceItem): Promise<void> {
    return new Promise((resolve, reject) => 
      this.firestore.collection('annonces').doc(annonce.id)
        .set(annonce)
          .then(
            () => resolve(), 
            err => reject(err)));
  }

  get(id: string): Promise<AnnonceItem> {
    return new Promise<AnnonceItem>((resolve, reject) => {
      this.listAnnonce.pipe(first()).subscribe(list => {
        for (let item of list) {
          if (item.id === id) {
            resolve(item);
          }
        }
        reject('component not fount...');
      });
    });
  }

  getByType(type: AnnonceType): Observable<AnnonceType> {
    return this.listAnnonce.pipe(map(item => item.filter(it => it.type === type))).source;
  }

  getMoyenne(annonce: AnnonceItem): number {
    let somme: number = 0;
    annonce.note.forEach(n => {somme += n;});
    return somme / annonce.note.length;
  }
}
