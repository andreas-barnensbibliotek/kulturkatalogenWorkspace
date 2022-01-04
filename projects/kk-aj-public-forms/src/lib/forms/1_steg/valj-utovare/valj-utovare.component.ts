import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-valj-utovare',
  templateUrl: './valj-utovare.component.html',
  styleUrls: ['./valj-utovare.component.scss']
})
export class ValjUtovareComponent implements OnInit {
  // @Input() formGroupName!: string;
  @Output() VisaUtovareData = new EventEmitter()

  TidigareUtovareFormGrp!:FormGroup;

  showinfo:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective ) { }

  ngOnInit(): void {
    // this.TidigareUtovareFormGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  // InitTidigareUtovareFormGrp():void{
  //   this.TidigareUtovareFormGrp = new FormGroup(
  //     {
  //       kk_aj_search_utovareEpost : new FormControl(),
  //       kk_aj_search_utovarePostnr : new FormControl()
  //     }
  //   )
  // }



  getTidigareUtovarData(){


    //this.TidigareUtovareFormGrp.get("Kommun")?.setValue("testar");


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
