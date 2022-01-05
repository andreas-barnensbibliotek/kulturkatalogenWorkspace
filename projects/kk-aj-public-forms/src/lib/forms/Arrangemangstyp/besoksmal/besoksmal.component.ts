import { FormGroup, FormGroupDirective, FormArray, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aj-besoksmal',
  templateUrl: './besoksmal.component.html',
  styleUrls: ['./besoksmal.component.scss']
})
export class BesoksmalComponent implements OnInit {
  @Input() formGroupName!: string;
  BesoksmalFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    //this.BesoksmalFrmGrp = this.rootformGroup.control
     this.BesoksmalFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  onCheckboxChange(e:any, controlname:string) {
    const checkArray: FormArray = this.BesoksmalFrmGrp.get(controlname) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
