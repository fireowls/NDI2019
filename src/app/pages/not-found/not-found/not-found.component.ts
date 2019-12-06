import { Component, OnInit, HostListener } from '@angular/core';
import { timer } from 'rxjs';



@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  nbr = 404;
  constructor() {

  }

  ngOnInit() {
  }
  get404(){
    return this.nbr;
  }
  decremente(){
    this.nbr-=1;
  }

}
