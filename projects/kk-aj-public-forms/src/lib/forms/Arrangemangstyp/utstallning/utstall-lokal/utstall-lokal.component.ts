import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aj-utstall-lokal',
  templateUrl: './utstall-lokal.component.html',
  styleUrls: ['./utstall-lokal.component.scss']
})
export class UtstallLokalComponent implements OnInit {

  @Input() formGroupName!: string;
  utstallLokalFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.utstallLokalFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
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
