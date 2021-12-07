import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-valj-utovare',
  templateUrl: './valj-utovare.component.html',
  styleUrls: ['./valj-utovare.component.scss']
})
export class ValjUtovareComponent implements OnInit {
  @Output() getUtovareData = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  getTidigareUtovarData(){
    this.getUtovareData.emit();
  }


}
