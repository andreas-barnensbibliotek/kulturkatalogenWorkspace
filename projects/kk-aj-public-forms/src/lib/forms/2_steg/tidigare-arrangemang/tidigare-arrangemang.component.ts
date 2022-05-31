import { FormArrangemangModel } from './../../MODELformGroup/FormArrangemangModel';
import { FormFaktaModel } from './../../MODELformGroup/FormFaktaModel';
import { FormGroupDirective, FormBuilder } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tidigare-arrangemang',
  templateUrl: './tidigare-arrangemang.component.html',
  styleUrls: ['./tidigare-arrangemang.component.scss']
})
export class TidigareArrangemangComponent implements OnInit {
  @Output() GetTidigareArr=new EventEmitter();

  _blnVisaNytt:boolean = true;

  constructor(private rootformGroup: FormGroupDirective, public fb:FormBuilder, private _arrMdl:FormArrangemangModel, private _faktaMdl:FormFaktaModel) { }

  ngOnInit(): void {
    this._blnVisaNytt=true;
  }

  // visa el dölj infotexter i formuläret
   // a = (click)="showHideinfo(2)"
   // <div *ngIf="showinfo[2]"
   showinfo:Array<boolean> = new Array;
   initshowhideVal(antalShowInfo:number):void{
     for (let i:number = 0; i == antalShowInfo; i++) {
       this.showinfo[i] = false;
     }
   }
   showHideinfo(infoboxID:number){
     this.showinfo[infoboxID] = !this.showinfo[infoboxID]
   }

   GetTidigareArrangemang(val:number){
    this.GetTidigareArr.emit(val);
   }

   valNyttTidigare(val:number){
    if(val==1){
      this._blnVisaNytt= true;
    };
    if(val==2){
      this._blnVisaNytt= false;
    };
      console.log(val);
    return false;
  }

}
