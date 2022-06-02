import { Injectable } from '@angular/core';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FavoritHandler {

favoriteList:any = [];

// public favoCount:number = this.favoriteList.length;

public favoCounter(){
  return this.favoriteList.length;
}
// getMaindata(CData:IpostSearchV2){
//   let storageItem: string = this.getSearchVal(CData);

//   if(this.glb.isEmptyObj(localStorage.getItem(storageItem)) || !this.glb.showCookies()){

//       this.wpApi.getCoreKatalogList(CData).subscribe(Response => {
//         this.mellan = Response;
//         this.mainCaruselData = this.mellan.kk_aj_admin.ansokningarlista;
//         localStorage.setItem(storageItem, JSON.stringify(this.mainCaruselData))
//         this.cd.detectChanges();
//       });

//   }else{
//     let test:any = localStorage.getItem(storageItem);
//     this.mainCaruselData = JSON.parse(test);

//   }
// }


}
