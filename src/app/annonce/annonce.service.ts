import { Injectable } from '@angular/core';
import { AnnonceItem } from './models/annonce-item.model';
import { AnnonceType } from './models/annonce-type.model';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  listAlimentaires: AnnonceItem[] = [];
  listColocataires: AnnonceItem[] = [];
  listVestimentaires: AnnonceItem[] = [];
  listProduits: AnnonceItem[] = [];

  constructor() { }

  add(annonce: AnnonceItem, type: AnnonceType): void {
    if(type === AnnonceType.ALIMENTAIRE)
      this.listAlimentaires.push(annonce);
    else if(type === AnnonceType.COLOCATAIRE)
      this.listColocataires.push(annonce);
    else if(type === AnnonceType.VESTIMENTAIRE)
      this.listVestimentaires.push(annonce);
    else if(type === AnnonceType.PRODUIT)
      this.listProduits.push(annonce);
    else
      return;
  }

  get(id: number, type: AnnonceType): AnnonceItem {
    if(type === AnnonceType.ALIMENTAIRE)
      return this.getAlimentaires(id);
    else if(type === AnnonceType.COLOCATAIRE)
      return this.getColocataires(id);
    else if(type === AnnonceType.VESTIMENTAIRE)
      return this.getVestimentaires(id);
    else if(type === AnnonceType.PRODUIT)
      return this.getProduits(id);
    else
      return null;
  }

  getAlimentaires(id: number): AnnonceItem {
    this.listAlimentaires.forEach(element => {
      if(element.id === id)
        return element;
    });

    return null;
  }

  getColocataires(id: number): AnnonceItem {
    this.listColocataires.forEach(element => {
      if(element.id === id)
        return element;
    });

    return null;
  }

  getVestimentaires(id: number): AnnonceItem {
    this.listVestimentaires.forEach(element => {
      if(element.id === id)
        return element;
    });

    return null;
  }

  getProduits(id: number): AnnonceItem {
    this.listProduits.forEach(element => {
      if(element.id === id)
        return element;
    });

    return null;
  }

  getList(type: AnnonceType): AnnonceItem[] {
    if(type === AnnonceType.ALIMENTAIRE)
      return this.listAlimentaires;
    else if(type === AnnonceType.COLOCATAIRE)
      return this.listColocataires;
    else if(type === AnnonceType.VESTIMENTAIRE)
      return this.listVestimentaires;
    else if(type === AnnonceType.PRODUIT)
      return this.listProduits;
    else
      return null;
  }

  getMoyenne(annonce: AnnonceItem): number {
    let somme: number = 0;
    annonce.note.forEach(n => {somme += n;});
    return somme / annonce.note.length;
  }
}
