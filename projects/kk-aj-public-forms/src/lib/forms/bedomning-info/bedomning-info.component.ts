import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bedomning-info',
  templateUrl: './bedomning-info.component.html',
  styleUrls: ['./bedomning-info.component.scss']
})
export class BedomningInfoComponent implements OnInit {

  valdtab:string = "1";
  constructor() { }

  ngOnInit(): void {
    this.valdtab= '1';
  }

  showCvTabs(showtabId:string):void{
    this.valdtab = showtabId;
  }
}
