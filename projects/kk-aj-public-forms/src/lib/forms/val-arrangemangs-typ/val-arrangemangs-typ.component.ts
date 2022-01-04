import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { ImageUploaderOptions } from 'ngx-image-uploader-next';

@Component({
  selector: 'app-val-arrangemangs-typ',
  templateUrl: './val-arrangemangs-typ.component.html',
  styleUrls: ['./val-arrangemangs-typ.component.scss']
})
export class ValArrangemangsTypComponent implements OnInit {
  @Input() formGroupName!:string;
  arrangemangFrmGrp!:FormGroup;

  options: ImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://localhost:4200/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.arrangemangFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  onCheckboxChange(e:any, controlname:string) {
    const checkArray: FormArray = this.arrangemangFrmGrp.get(controlname) as FormArray;

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
