import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormGroupDirective, FormBuilder, FormArray } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { FormExempelModel } from './../MODELformGroup/FormExempelModel';

@Component({
  selector: 'app-smakprov',
  templateUrl: './smakprov.component.html',
  styleUrls: ['./smakprov.component.scss']
})
export class SmakprovComponent implements OnInit {
  @Input() formGroupName!:string;
  // parentFrmGrp!:FormArray;
  exempelFrmGrp!:FormGroup;
  rootFrmGrp!:FormGroup;
  FaktaFrmGrp!:FormGroup;
  videoUrl:any= [];
  // BesoksmalFrmGrp!:FormGroup;
  ExempelLista:any=[];
  VisaExempelRubrik:boolean= false;
  showExemple:boolean =false;
  lblExemple:string="";
  valExempeldtab:string ="1";
  showInfoText = [
    {info:false},
    {info:false},
    {info:false}
  ];

  constructor(private rootformGroup: FormGroupDirective, private fb:FormBuilder, public _ExempleMdl: FormExempelModel, private _sanitizer: DomSanitizer ) { }

  ngOnInit(): void {
    this.rootFrmGrp =this.rootformGroup.control as FormGroup
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
    // console.log("exlist: " + this.ExempelLista);
    // this.parentFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormArray;
    if(this.Exempel.length<=0){
      this.exempelFrmGrp = this.fb.group(this._ExempleMdl.genFG);
    }else{
      this.ExempelLista = this.Exempel.value;
    }

    // this.BesoksmalFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

    this.lblExemple="Lägg till exempel";
    this.valExempeldtab = '1';
    this.showInfoText[0].info = false;
    this.showInfoText[1].info = false;
    this.showInfoText[2].info = false;
  }

  get Exempel():FormArray{
    return this.FaktaFrmGrp.get("Exempel") as FormArray;
  }

  visadoljshowExemple(){
    if(this.showExemple){
        this.lblExemple="Lägg till exempel";
    }else{
      this.lblExemple="Avbryt lägg till exempel";
    };

    this.showExemple= !this.showExemple;
  }

  showExempelTabs(showtabId:string):void{
    if(showtabId=='1'){
      this.exempelFrmGrp.patchValue({MediaTyp: 2}); //filmtyp = 2
    }
    if(showtabId=='2'){
      this.exempelFrmGrp.patchValue({MediaTyp: 1}); //Bildtyp = 1
    }

    this.valExempeldtab = showtabId;
  }
  showInfo(showtabId:number):void{
    // console.log("visa texten: " + this.showInfoText[showtabId].info)
    this.showInfoText[showtabId].info = !this.showInfoText[showtabId].info;
  }

  showtmpImg(){
    // this.exempelFrmGrp.get('MediaUrl')!.valueChanges.subscribe(val => {
    //   this.ImgUrlSrc =  val;
    // });
    console.log("länk ändrad")
  }

  addExempletoBaseForm(){
console.log(this.Exempel);
console.log(this.exempelFrmGrp.value);
    //this.exempelFrmGrp.get('MediaUrl')!.value.replace(/(^\w+:|^)\/\//, '');
    this.Exempel.push(this.exempelFrmGrp);
    this.VisaExempelRubrik = true;
    // this.parentFrmGrp.push(this.exempelFrmGrp);
    this.exempelFrmGrp = this.fb.group(this._ExempleMdl.genFG);
    this.ExempelLista = this.Exempel.value;
    console.log(this.ExempelLista);
  }

  removeExempel(idx:number){
    this.Exempel.removeAt(idx);
    this.ExempelLista = this.rootFrmGrp.value;
    if(Object.keys(this.Exempel.value).length==0){
      this.VisaExempelRubrik = false;
    }
  }

  updateVimeoVideoUrl(dangerousVideoUrl: string) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    return this._sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
  }

}
