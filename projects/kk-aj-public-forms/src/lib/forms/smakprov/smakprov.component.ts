import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smakprov',
  templateUrl: './smakprov.component.html',
  styleUrls: ['./smakprov.component.scss']
})
export class SmakprovComponent implements OnInit {
  showExemple:boolean =false;
  lblExemple:string="";


  constructor() { }

  ngOnInit(): void {
    this.lblExemple="Lägg till exempel"
  }

  visadoljshowExemple(){
    if(this.showExemple){
        this.lblExemple="Lägg till exempel";
    }else{
      this.lblExemple="Avbryt lägg till exempel";
    };

    this.showExemple= !this.showExemple;
  }
}
