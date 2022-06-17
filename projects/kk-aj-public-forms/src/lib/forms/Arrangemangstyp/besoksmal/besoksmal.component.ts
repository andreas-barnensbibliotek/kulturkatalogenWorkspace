import { FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'aj-besoksmal',
  templateUrl: './besoksmal.component.html',
  styleUrls: ['./besoksmal.component.scss']
})
export class BesoksmalComponent implements OnInit, OnChanges {
  @Input() formGroupName!: string;
  BesoksmalFrmGrp!: FormGroup;
  ExempelFormGrp!:FormArray;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.BesoksmalFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      this.BesoksmalFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
    })
  }

 get ExempelFormGroup(){
   return this.BesoksmalFrmGrp.get("Exempel");
 }
}
