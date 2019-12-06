import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() note: number;

  constructor() { }

  ngOnInit() {
  }

  sequenceOk(): number[] {
    const res: number[] = [];
    for (let i = 0; i < this.note; i ++) {
      res.push(i);
    }
    return res;
  }

  sequencePasOk(): number[] {
    const res: number[] = [];
    for (let i = 0; i < 5 - this.note; i ++) {
      res.push(i);
    }
    return res;
  }

}
