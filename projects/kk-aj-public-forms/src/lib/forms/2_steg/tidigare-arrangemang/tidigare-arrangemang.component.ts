import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tidigare-arrangemang',
  templateUrl: './tidigare-arrangemang.component.html',
  styleUrls: ['./tidigare-arrangemang.component.scss']
})
export class TidigareArrangemangComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
