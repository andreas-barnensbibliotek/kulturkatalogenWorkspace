import { Router } from '@angular/router';
import { IpostSearchV2 } from './../../interface/ipost-search-v2';
import { KatalogenApiService } from './../../services/katalogenApi/katalogen-api.service';
import { clsPostDataV2 } from './../../models/clsPostData-v2';
import { Component, OnInit, Input, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aj-carousel-block',
  templateUrl: './aj-carousel-block.component.html',
  styleUrls: ['./aj-carousel-block.component.scss']
})
export class AjCarouselBlockComponent implements OnInit {

  @Input() CaruselData!:clsPostDataV2;
  @Output() public changeDetailId = new EventEmitter();

  mainCaruselData?:any = [];
  mellan?:any=[];

  constructor(private wpApi:KatalogenApiService, private renderer: Renderer2, private _router:Router) { }

  ngOnInit(): void {
    this.getCaruselData(this.CaruselData)
  }

  getCaruselData(CData:IpostSearchV2){
    this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
      this.mellan = Response;
      this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista
    })
  }

  loadPageData(id:string){
    this.changeDetailId.emit(id);
    this._router.navigateByUrl('/Arr/id/' +id);
  }

  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
