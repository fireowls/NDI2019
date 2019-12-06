import { Component, OnInit, HostListener } from '@angular/core';
import { timer } from 'rxjs';



@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  nbr=404;
  position = 0;
  constructor() {

  }
  ngOnInit() {
  //  timer(5).subscribe(val => this.changePosition() );
  }
  decremente(){
    this.nbr--;
  }
  changePosition(){
    this.position+= 1;
    if(this.position>window.screen.width){
      this.position = 0;
    }

    this.ngOnInit();
  }

  getPositionLeft(){
    return this.position+'px';
  }
}
