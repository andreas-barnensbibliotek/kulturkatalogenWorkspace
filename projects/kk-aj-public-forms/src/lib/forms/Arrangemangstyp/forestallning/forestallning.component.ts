import { FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aj-forestallning',
  templateUrl: './forestallning.component.html',
  styleUrls: ['./forestallning.component.scss']
})
export class ForestallningComponent implements OnInit {
  @Input() formGroupName!: string;
  ForestallningFrmGrp!: FormGroup;
  ExempelFormGrp!:FormArray;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.ForestallningFrmGrp = this.rootformGroup.control
  }

 get ExempelFormGroup(){
   return this.ForestallningFrmGrp.get("Exempel");
 }
}
