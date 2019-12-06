import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AnnonceItem } from '../models/annonce-item.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  @Input() annonce: AnnonceItem;
  @Output() AnnonceClick = new EventEmitter<AnnonceItem>();

  constructor() { }

  ngOnInit() {
  }

  emit() {
    this.AnnonceClick.emit(this.annonce);
  }

}
