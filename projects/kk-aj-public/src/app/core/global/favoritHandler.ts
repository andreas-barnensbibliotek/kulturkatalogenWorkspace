import { Injectable } from '@angular/core';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FavoritHandler {

  favoriteList:any = [];

  public favoCounter(){
    return this.favoriteList.length;
  }
}
