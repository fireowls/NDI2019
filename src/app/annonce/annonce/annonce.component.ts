import { Component, OnInit, Input } from '@angular/core';
import { AnnonceService } from '../annonce.service';
import { AnnonceType } from '../models/annonce-type.model';
import { AnnonceItem } from '../models/annonce-item.model';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  @Input() type: AnnonceType;

  constructor(private service: AnnonceService) { }

  ngOnInit() {
  }

  getListeAnnonce(): AnnonceItem[] {
    return this.service.getList(this.type);
  }

}
