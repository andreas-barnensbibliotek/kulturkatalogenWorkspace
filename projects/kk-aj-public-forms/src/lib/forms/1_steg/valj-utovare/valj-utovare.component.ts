import { formUtovareModel } from './../../MODELformGroup/formUtovareModel';
import { FormGroup, FormControl, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-valj-utovare',
  templateUrl: './valj-utovare.component.html',
  styleUrls: ['./valj-utovare.component.scss']
})
export class ValjUtovareComponent implements OnInit {

  @Output() VisaUtovareData = new EventEmitter()

  TidigareUtovareFormGrp!:FormGroup;
  BaseRootForm?:FormGroup;
  showinfo:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective, private _fb: FormBuilder, private _utovareMdl: formUtovareModel ) { }
  ngOnInit(): void {

      this.InitTidigareUtovareFormGrp();

  }

  get Epost(){
    return this.TidigareUtovareFormGrp.get("Epost");
  }
  get Postnr(){
    return this.TidigareUtovareFormGrp.get("Postnr");
  }

  InitTidigareUtovareFormGrp():void{
    this.TidigareUtovareFormGrp = this._fb.group(
      {
        Epost: ['',[Validators.required, Validators.email]],
        Postnr: ['', Validators.required],
      }
    )
  }


  getTidigareUtovarData(){
    //this.TidigareUtovareFormGrp.get("Kommun")?.setValue("testar");
    this.rootformGroup.control.patchValue({Utovarelist:this._utovareMdl.getUtovareData()});

    this.VisaUtovareData.emit(1);
  }

  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }

  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }

}
