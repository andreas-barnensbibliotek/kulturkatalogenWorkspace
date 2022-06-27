import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aj-lokal-utstallning',
  templateUrl: './lokal-utstallning.component.html',
  styleUrls: ['./lokal-utstallning.component.scss']
})
export class LokalUtstallningComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  showinfo:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  get Yta(){
    return this.FaktaFrmGrp.get("Yta") as FormControl;
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
