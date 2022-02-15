import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny-utovare',
  templateUrl: './ny-utovare.component.html',
  styleUrls: ['./ny-utovare.component.scss']
})
export class NyUtovareComponent implements OnInit {

  @Input() formGroupName!: string;
  nyUtovareFrmGrp!: FormGroup
  showinfo:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective) { }

  get Organisation(){
    return this.nyUtovareFrmGrp.get('Organisation');
  }
  get Weburl(){
    return this.nyUtovareFrmGrp.get('Weburl');
  }
  get Adress(){
    return this.nyUtovareFrmGrp.get('Adress');
  }
  get Postnr(){
    return this.nyUtovareFrmGrp.get('Postnr');
  }
  get Ort(){
    return this.nyUtovareFrmGrp.get('Ort');
  }
  get Kommun(){
    return this.nyUtovareFrmGrp.get('Kommun');
  }
  get Fornamn(){
    return this.nyUtovareFrmGrp.get('Fornamn');
  }
  get Efternamn(){
    return this.nyUtovareFrmGrp.get('Efternamn');
  }
  get Telefon(){
    return this.nyUtovareFrmGrp.get('Telefon');
  }
  get Epost(){
    return this.nyUtovareFrmGrp.get('Epost');
  }

  ngOnInit(): void {
    this.initshowhideVal(8);
    this.nyUtovareFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

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
