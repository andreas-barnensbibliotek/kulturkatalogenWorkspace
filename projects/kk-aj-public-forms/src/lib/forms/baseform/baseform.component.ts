import { FormFaktaModel } from './../MODELformGroup/FormFaktaModel';
import { FormExempelModel } from './../MODELformGroup/FormExempelModel';
import { FormArrangemangModel } from './../MODELformGroup/FormArrangemangModel';
import { FormVisaBlockHandlerModel } from './../MODELformGroup/FormVisaBlockHandlerModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileQueueObject, ImageUploaderOptions } from 'ngx-image-uploader-next';
import { formUtovareModel } from '../MODELformGroup/formUtovareModel';
import { formKontaktModel } from '../MODELformGroup/formKontaktModel';

@Component({
  selector: 'app-baseform',
  templateUrl: './baseform.component.html',
  styleUrls: ['./baseform.component.scss']
})
export class BaseformComponent implements OnInit {

  BaseRootForm!:FormGroup;


  constructor(
    private _utovareMdl: formUtovareModel,
    private _kontaktMdl: formKontaktModel,
    private _arrMdl:FormArrangemangModel,
    public _blockMdl: FormVisaBlockHandlerModel,
    public _faktaMdl: FormFaktaModel,
    public _exempelMdl: FormExempelModel,
    public fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFromGroupdata();
  }

  initFromGroupdata(){
    this.BaseRootForm = this.fb.group({
      Utovarelist: this.fb.group(this._utovareMdl.genFG),
      Kontakt: this.fb.group(this._kontaktMdl.genFG),
      Arrangemang: this.fb.group(this._arrMdl.genFG),
      Faktalist:this.fb.group([this._faktaMdl.genFG]),
      Exempel:this.fb.group(this._exempelMdl.genFG)
    });
  }

  onUpload(file: FileQueueObject) {

    console.log("detta:" + file.response);
  }

  gettidigare(){
    //hämta utövardatat från apit och patcha utövarlistan
    this.BaseRootForm.patchValue({Utovarelist:this._utovareMdl.getUtovareData()});
    this._blockMdl.showTidigareUtovare();
  }

  kopieraKontaktdata(val:any){
    let obj = {
        KontaktId:'',
        Kontaktfornamn: this.BaseRootForm.get('Utovarelist')!.get('Fornamn')!.value,
        KontaktEfternamn: this.BaseRootForm.get('Utovarelist')!.get('Efternamn')!.value,
        KontaktTelefon: this.BaseRootForm.get('Utovarelist')!.get('Telefon')!.value,
        KontaktEpost: this.BaseRootForm.get('Utovarelist')!.get('Efternamn')!.value,
    }
    this.BaseRootForm.patchValue({Kontakt: obj});
  }

  valUtovare(val:number){
    if(val==1){
      this._blockMdl.showNyUtovare();
      this.BaseRootForm.reset();
      this.initFromGroupdata();
    };
    if(val==2){
      this._blockMdl.showValUtovare();
    };

    return false;
  }

  changeUtovareUppgifter(){
    this._blockMdl.showChangeUtovareUppgifter();
  }

  ShowSteg(val:number){
    this._blockMdl.stegBlock(val)
    return false;
  }

  showFaktaBlock(arrtypid:number){
    let visaFakta = this.BaseRootForm.get('Arrangemang')!.get('Arrangemangtyp')!.value;
    if(arrtypid == visaFakta){
      return true;
    }
  }

}
