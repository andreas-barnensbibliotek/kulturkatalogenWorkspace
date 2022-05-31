import { HttpClient, HttpEventType } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective, } from '@angular/forms'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-imageupload-aj',
  templateUrl: './imageupload-aj.component.html',
  styleUrls: ['./imageupload-aj.component.scss']
})
export class ImageuploadAJComponent implements OnInit {
  @Input() formGroupName!:string;
  @ViewChild('imgfilevalue')
  imgfilevalue!: ElementRef;
  imageUploadFrmGrp!:FormGroup;

  showinfo:Array<boolean> = new Array;
  contactForm:any;
  imgtest:any;
  fileData!: File;
  previewTempimg:string ="/assets/img/missingimage.jpg";
  previewUrl:any = this.previewTempimg;
  fileUploadProgress: string = "";
  uploadedFilePath: string = "";
  tillGangligfalt:boolean = false;

  constructor(private http: HttpClient, private rootformGroup: FormGroupDirective) {}
  ngOnInit(): void {
    this.imageUploadFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    ///tar bort error att input file inte får innehålla något ...
    if(this.imageUploadFrmGrp.get("MediaUrl")!.value){
      this.imageUploadFrmGrp.patchValue({MediaUrl: ""})
    }
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    if(!this.fileData){
      this.previewUrl= this.previewTempimg;
      return false;
    }
      console.log("size: "+ this.fileData?.size);
    if (this.fileData.size) {
      if (this.fileData.size > 720 * 1024) {
        alert("filen får inte vara större än 720kb!");
        // this.errorMessage = `Image must not be larger than ${this.options.maxImageSize} MB`;
        this.imgfilevalue.nativeElement.value = '';
        return;
      }
    }
    this.preview();
  }

  preview() {
    // Show preview
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      this.tillGangligfalt =false
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      this.tillGangligfalt = true;

    this.imageUploadFrmGrp.patchValue({MediaFilename: this.fileData?.name})
    }
  }

  onSubmit() {
    const formData = new FormData();
    if(!this.fileData){
      alert("Det är tomt");
      this.tillGangligfalt = false;
      return false;
    }
    if (this.fileData.size) {
      if (this.fileData.size > 120 * 1024) {
        alert("sorry filen är för stor");
        this.tillGangligfalt = false;
        return;
      }
    }
    formData.append('files', this.fileData);
    this.imageUploadFrmGrp.patchValue({MediaFilename: this.fileData?.name})
    // this.fileUploadProgress = '0%';

    //  this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
    //   // this.http.post('https://test.se/fileUpload', formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    // .subscribe(events => {

    //   if(events.type === HttpEventType.UploadProgress) {
    //     this.fileUploadProgress = Math.round(events.loaded / events.total! * 100) + '%';
    //     console.log(this.fileUploadProgress);
    //   } else if(events.type === HttpEventType.Response) {
    //     this.fileUploadProgress = '';
    //     console.log(events.body);
    //     this.tillGangligfalt = true;
    //     alert('SUCCESS !!');
    //   }
    // })
  }

  // ShowTillgangligFalt(){
  //   this.showinfo = !this.showinfo
  // }

  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }

  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }

}
