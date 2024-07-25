import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http : HttpClient) { }

  // private ApiUrl : string = environment.apiurl;
  private ApiUrl : string = "";

  LoginMethod(url : string , obj : any){
    return this.http.post( this.ApiUrl + url , obj );
  }

  // PostMethod(url : string , obj : any) : Observable<any> {
  //   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(atob(sessionStorage.getItem('token') || '') || '')?.token );
  //   return this.http.post<any>( this.ApiUrl + url , obj , { headers : headers } );
  // }
  PostMethod(url : string , obj : any) : Observable<any> {
    return this.http.post<any>( this.ApiUrl + url , obj);
  }

  // GetMethod(url : string , id : string | number) : Observable<any> {
  //   let headers = new HttpHeaders().set('Authorization', 'Bearer ' + JSON.parse(atob(sessionStorage.getItem('token') || '') || '')?.token );
  //   return this.http.get<any>( this.ApiUrl + url + id , { headers : headers } );
  // }
  GetMethod(url : string , id : string | number) : Observable<any> {return this.http.get<any>( this.ApiUrl + url + id);
  }

}
