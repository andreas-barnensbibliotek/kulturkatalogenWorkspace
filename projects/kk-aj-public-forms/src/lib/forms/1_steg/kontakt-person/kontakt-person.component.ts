import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kontakt-person',
  templateUrl: './kontakt-person.component.html',
  styleUrls: ['./kontakt-person.component.scss']
})
export class KontaktPersonComponent implements OnInit {
  @Output() copydata = new EventEmitter()
  @Input() formGroupName!: string;
  showinfo:Array<boolean> = new Array;

  kontaktFrmGrp!: FormGroup
  constructor(private rootformGroup: FormGroupDirective) {}

  get Kontaktfornamn(){
   return this.kontaktFrmGrp.get('Kontaktfornamn');
  }
  get KontaktEfternamn(){
    return this.kontaktFrmGrp.get('KontaktEfternamn');
  }
  get KontaktTelefon(){
    return this.kontaktFrmGrp.get('KontaktTelefon');
  }
  get KontaktEpost(){
    return this.kontaktFrmGrp.get('KontaktEpost');
  }


  ngOnInit(): void {
    this.initshowhideVal(3);
    this.kontaktFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }


  copykontaktData(){
    // this.copydata.emit();
    this.kopieraKontaktdata();
    return false;
  }


  kopieraKontaktdata(){
    let obj = {
        KontaktId:'',
        Kontaktfornamn: this.rootformGroup.control.get('Utovarelist')!.get('Fornamn')!.value,
        KontaktEfternamn: this.rootformGroup.control.get('Utovarelist')!.get('Efternamn')!.value,
        KontaktTelefon: this.rootformGroup.control.get('Utovarelist')!.get('Telefon')!.value,
        KontaktEpost: this.rootformGroup.control.get('Utovarelist')!.get('Epost')!.value,
    }
    this.Kontaktfornamn!.patchValue(obj.Kontaktfornamn);
    this.KontaktEfternamn!.patchValue(obj.KontaktEfternamn);
    this.KontaktTelefon!.patchValue(obj.KontaktTelefon);
    this.KontaktEpost!.patchValue(obj.KontaktEpost);
    this.rootformGroup.control.patchValue({Kontakt: obj});
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
