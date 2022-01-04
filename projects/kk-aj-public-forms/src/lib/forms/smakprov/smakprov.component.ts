import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smakprov',
  templateUrl: './smakprov.component.html',
  styleUrls: ['./smakprov.component.scss']
})
export class SmakprovComponent implements OnInit {
  @Input() formGroupName!:string;
  exempelFrmGrp!:FormGroup;

  showExemple:boolean =false;
  lblExemple:string="";
  valExempeldtab:string ="1";
  showInfoText = [
    {info:false},
    {info:false}
  ];

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.exempelFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
    this.lblExemple="Lägg till exempel";
    this.valExempeldtab = '1';
    this.showInfoText[0].info = false;
    this.showInfoText[1].info = false;

  }

  visadoljshowExemple(){
    if(this.showExemple){
        this.lblExemple="Lägg till exempel";
    }else{
      this.lblExemple="Avbryt lägg till exempel";
    };

    this.showExemple= !this.showExemple;
  }

  showExempelTabs(showtabId:string):void{
    this.valExempeldtab = showtabId;
  }
  showInfo(showtabId:number):void{
    console.log("visa texten: " + this.showInfoText[showtabId].info)
    this.showInfoText[showtabId].info = !this.showInfoText[showtabId].info;
  }

  showtmpImg(){
    console.log("länk ändrad")
  }
}
