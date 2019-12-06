import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnnonceType } from '../models/annonce-type.model';
import { Observable } from 'rxjs';
import { AnnonceItem } from '../models/annonce-item.model';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-annonce-list',
  templateUrl: './annonce-list.component.html',
  styleUrls: ['./annonce-list.component.scss']
})
export class AnnonceListComponent implements OnInit {

  @Input() type: AnnonceType;
  @Output() itemSelected = new EventEmitter<AnnonceItem>();

  annonces: Observable<AnnonceItem[]>;

  constructor(private service: AnnonceService) { }

  ngOnInit() {
    this.annonces = this.service.getByType(this.type);
  }

  emit(item: AnnonceItem) {
    this.itemSelected.emit(item);
  }

}
