import { Component, OnInit, Input } from '@angular/core';
import { AnnonceService } from '../annonce.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss']
})
export class AnnonceComponent implements OnInit {

  constructor(private service: AnnonceService) { }

  ngOnInit() {
    
  }

}
