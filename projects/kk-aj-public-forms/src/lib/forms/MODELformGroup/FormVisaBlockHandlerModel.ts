import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormVisaBlockHandlerModel {

  blnSteg1:boolean=false;
  blnSteg2:boolean=true;
  blnSteg3:boolean=false;
  blnSteg4:boolean=false;

  // Övergrippande hantering av block -----------------------------

  stegBlock(val:number){
    switch(val){
      case 1:
        this.steg1_Block();
        break;
      case 2:
        this.steg2_Block();
        break;
      case 3:
        this.steg3_Block();
        break;
      case 4:
        this.steg4_Block();
        break;
    }
  }

  steg1_Block(){
    this.hideAllStegBlock();
    this.blnSteg1= true;
  }

  steg2_Block(){
    this.hideAllStegBlock();
    this.blnSteg2= true;
  }

  steg3_Block(){
    this.hideAllStegBlock();
    this.blnSteg3= true;
  }

  steg4_Block(){
    this.hideAllStegBlock();
    this.blnSteg4= true;
  }

  // Steg 1 utövare och kontakt uppgifter block -------------------
  blnValUtovare:boolean = false;
  blnNyUtovare:boolean= true;
  blnTidigareUtovare:boolean= false;
  blnKontaktUpg:boolean= true;

  showValUtovare(){
    this.hideAllUtovareblock();
    this.blnValUtovare=true;
  }
  showNyUtovare(){
    this.hideAllUtovareblock();
    this.blnNyUtovare=true;
    this.blnKontaktUpg=true;
  }
  showTidigareUtovare(){
    this.hideAllUtovareblock();
    this.blnTidigareUtovare=true;
    this.blnKontaktUpg=true;
  }
  showChangeUtovareUppgifter(){
    this.hideAllUtovareblock();
    this.blnNyUtovare=true;
    this.blnKontaktUpg=true;
  }

  hideAllUtovareblock(){
    this.blnValUtovare=false;
    this.blnNyUtovare=false;
    this.blnTidigareUtovare=false;
    this.blnKontaktUpg=false;
  }

  // Steg 2 arrangemangs block ------------------------------------

  // Steg 3 Granska arrangemanget block ---------------------------

  // Steg 4 skicka in arrangemanget -------------------------------


  // Helper funktioner

  hideAllStegBlock(){
    this.blnSteg1=false;
    this.blnSteg2=false;
    this.blnSteg3=false;
    this.blnSteg4=false;
  }
}
