import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe_html' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  urltoMovie:string="";
  transform(filmUrl: any) {


    let filmID= filmUrl.split('/').at(-1)
    console.log("rensat: " + filmID);

    //test for youtube browserurl
    let youtubeUrlIndex = filmID.indexOf( "watch?" );
    if (youtubeUrlIndex != -1 ){
      filmID= filmID.split('=').at(-1)
    };

    if (isNaN(filmID)) {
      this.urltoMovie = "https://www.youtube.com/embed/" + filmID;
    } else {
      this.urltoMovie = "https://player.vimeo.com/video/" + filmID;
    };

    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urltoMovie);
  }
}
