import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aj-lokal-skolbio',
  templateUrl: './lokal-skolbio.component.html',
  styleUrls: ['./lokal-skolbio.component.scss']
})
export class LokalSkolbioComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
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
