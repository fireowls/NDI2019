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

  ajouter(annonce: AnnonceItem, type: AnnonceType): void {
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

  
}
