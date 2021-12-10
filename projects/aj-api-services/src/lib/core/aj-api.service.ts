import { IpostSearch } from './interface/ipost-search';
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AjApiService {
  private _httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  private _httpOptions2 = {
    headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})
  }

  constructor(@Inject(String) private url:string, private http:HttpClient) {
  }

  getPosts(url:any){
    // console.log("kommer hit " + url);

    if(url) this.url =url;
      return this.http.get(this.url,this._httpOptions)
    .pipe(
      retry(1),// använd retry för att göra om reqesten x gånger
      catchError(this.handleError),
    );
  }

  doPost(url:string, postobj:FormData){
    return this.http.post(url,postobj)
    .pipe(
      catchError(this.handleError)
    );
  }

  doKatPost(url:string, postobj:IpostSearch){
    return this.http.post(url,JSON.stringify(postobj),this._httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  doPostFile(url:string, postobj:FormData){
    return this.http.post(url, postobj)
    .pipe(
      catchError(this.handleError)
    );
  }

  deletePost(id:any){
    return this.http.delete(this.url +'/'+ id)
    .pipe(
      catchError(this.handleError)
    );
  }


private handleError( errorResponse:HttpErrorResponse){

  // if(errorResponse.error.status === 400){
  //   console.log("detta är 400");
  // }

    if(errorResponse.error instanceof ErrorEvent){
      console.error("Clientside error: ", errorResponse.error.message);
    }else{
      console.error("Serverside error: ", errorResponse);
    }

    return throwError("Något blev fel vid hämtning av data. Vi har fått en notering och jobbar med felet. vänligen försök senare");

  }
}
