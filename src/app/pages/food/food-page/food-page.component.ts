import { Component, OnInit } from '@angular/core';
import { AnnonceType } from 'src/app/annonce/models/annonce-type.model';
import { AnnonceItem } from 'src/app/annonce/models/annonce-item.model';
import { AnnonceService } from 'src/app/annonce/services/annonce.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  type = AnnonceType.ALIMENTAIRE;

  constructor(private annonceService: AnnonceService) { }

  ngOnInit() {
  }

  open(item: AnnonceItem) {
    
  }

}
