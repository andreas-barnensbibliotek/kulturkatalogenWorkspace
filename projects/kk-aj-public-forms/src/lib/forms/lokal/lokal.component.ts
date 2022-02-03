import { FormGroup, FormGroupDirective } from '@angular/forms';
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
}
