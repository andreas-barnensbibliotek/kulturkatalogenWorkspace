import { App_Global } from './../../global/app_global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  devversion:string="";

  constructor( public glb:App_Global) { }

  ngOnInit(): void {
    this.devversion= this.glb.currentversion
  }

}
