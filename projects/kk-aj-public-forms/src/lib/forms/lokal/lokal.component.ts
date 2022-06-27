import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lokal',
  templateUrl: './lokal.component.html',
  styleUrls: ['./lokal.component.scss']
})
export class LokalComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  get Byggtid(){
    return this.FaktaFrmGrp.get("Byggtid") as FormControl;
  }
  get Rivtid(){
    return this.FaktaFrmGrp.get("Rivtid") as FormControl;
  }
  get ScenBredd(){
    return this.FaktaFrmGrp.get("ScenBredd") as FormControl;
  }
  get ScenDjup(){
    return this.FaktaFrmGrp.get("ScenDjup") as FormControl;
  }
  get ScenTakHojd(){
    return this.FaktaFrmGrp.get("ScenTakHojd") as FormControl;
  }
  get Ljud(){
    return this.FaktaFrmGrp.get("Ljud") as FormControl;
  }
  get Ljus(){
    return this.FaktaFrmGrp.get("Ljus") as FormControl;
  }
  get Morklaggning(){
    return this.FaktaFrmGrp.get("Morklaggning") as FormControl;
  }
  get BarHjalp(){
    return this.FaktaFrmGrp.get("BarHjalp") as FormControl;
  }
  get El(){
    return this.FaktaFrmGrp.get("El") as FormControl;
  }

  showinfo:Array<boolean> = new Array;
  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }
  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }
}
