import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { ImageUploaderModule } from 'ngx-image-uploader-next';

@Component({
  selector: 'app-tidigare-utovare',
  templateUrl: './tidigare-utovare.component.html',
  styleUrls: ['./tidigare-utovare.component.scss']
})
export class TidigareUtovareComponent implements OnInit {
  @Input() formGroupName!: string;
  @Output() ChangeUtovareInfo=new EventEmitter();

  tidigareUtovareFrmGrp!: FormGroup
  showinfo:Array<boolean> = new Array;
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.tidigareUtovareFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  changeUppgifter(){
    this.ChangeUtovareInfo.emit();
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
