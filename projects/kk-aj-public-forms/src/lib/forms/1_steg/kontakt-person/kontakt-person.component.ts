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

  kontaktFrmGrp!: FormGroup
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.kontaktFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }


  copykontaktData(){
    this.copydata.emit();
    return false;
  }
}
