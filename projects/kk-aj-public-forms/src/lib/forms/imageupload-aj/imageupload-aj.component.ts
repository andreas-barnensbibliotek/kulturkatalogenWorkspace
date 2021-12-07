import { HttpClient, HttpEventType } from '@angular/common/http';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-imageupload-aj',
  templateUrl: './imageupload-aj.component.html',
  styleUrls: ['./imageupload-aj.component.scss']
})
export class ImageuploadAJComponent implements OnInit {
  @ViewChild('imgfilevalue')
  imgfilevalue!: ElementRef;


  contactForm:any;
  imgtest:any;
  fileData!: File;
  previewUrl:any = "/assets/img/missingimage.jpg";
  fileUploadProgress: string = "";
  uploadedFilePath: string = "";

  constructor(private http: HttpClient, private _fb: FormBuilder) {

   }

  fileProgress(fileInput: any) {
        this.fileData = <File>fileInput.target.files[0];
        console.log("size: "+ this.fileData.size);
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
        return;
      }


      var reader = new FileReader();
      reader.readAsDataURL(this.fileData);
      reader.onload = (_event) => {
        this.previewUrl = reader.result;
      }
  }

  onSubmit() {
    const formData = new FormData();
    if (this.fileData.size) {
      if (this.fileData.size > 120 * 1024) {
        alert("sorry filen är för stor");
        return;
      }
    }
    formData.append('files', this.fileData);

    this.fileUploadProgress = '0%';

    this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', formData, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(events => {

      if(events.type === HttpEventType.UploadProgress) {
        this.fileUploadProgress = Math.round(events.loaded / events.total! * 100) + '%';
        console.log(this.fileUploadProgress);
      } else if(events.type === HttpEventType.Response) {
        this.fileUploadProgress = '';
        console.log(events.body);
        alert('SUCCESS !!');
      }

    })
}

  ngOnInit(): void {
  }

}
