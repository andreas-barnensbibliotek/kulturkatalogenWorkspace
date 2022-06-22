import { FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aj-skickain-form',
  templateUrl: './skickain-form.component.html',
  styleUrls: ['./skickain-form.component.scss']
})
export class SkickainFormComponent implements OnInit {

  approve:boolean= false;
  basevalid:boolean= false;

  constructor(private rootformGroup: FormGroupDirective,) {
    this.basevalid = rootformGroup.valid || false
  }

  ngOnInit(): void {
  }

  onCheckboxChange(e:any) {
    if (e.target.checked) {
      if(this.basevalid){
        this.approve= true;
      }else{
        this.approve= false;
        alert("Formuläret är inte korrekt i fyllt! Gå tillbaka och fyll i alla uppgifter!")
      }
    } else {
       this.approve= false;
    }
  }

  SkickaInArrFrom(){

    alert("Skicka in: " + JSON.stringify(this.rootformGroup.value));
    return false;
  }


}
