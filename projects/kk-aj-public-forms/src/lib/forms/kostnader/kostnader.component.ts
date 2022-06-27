import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';

@Component({
  selector: 'app-kostnader',
  templateUrl: './kostnader.component.html',
  styleUrls: ['./kostnader.component.scss']
})
export class KostnaderComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  get Kostnad(){
    return this.FaktaFrmGrp.get("Kostnad") as FormControl;
  }
  get Resor(){
    return this.FaktaFrmGrp.get("Resor") as FormControl;
  }
  get Logi(){
    return this.FaktaFrmGrp.get("Logi") as FormControl;
  }
  get Traktamente(){
    return this.FaktaFrmGrp.get("Traktamente") as FormControl;
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
