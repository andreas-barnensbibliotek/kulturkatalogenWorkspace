import { ServerJson } from './../../models/ServerJson';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StringNullableChain } from 'lodash';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit,OnChanges {
  mobileMenuStatus:boolean= false;
  constructor( private _favo: ServerJson) { }

  visafavo:number = 0;
  visafavotext:String=""

  ngOnInit(): void {
    this.visafavo= this._favo.favoCounter();
    this.visaFavotitel(this.visafavo);

    this._favo.getFavoritAntal().subscribe(
      (antal) =>{
        this.visafavo = antal;
        this.visaFavotitel(antal);
      }
    );

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.visafavo = this._favo.favoCounter();
  }

  visaFavotitel(antal:number){
    if(this.visafavo){
      this.visafavotext = "Du har "+ antal + " i din minneslista";
    }else{
      this.visafavotext="Minneslista. Du har inget i minneslistan";
    }
  }

  showMobileMenu(){
    this.mobileMenuStatus = !this.mobileMenuStatus;
}
}
