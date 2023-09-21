import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {
  private urlApi:string = 'http//localhost:8080/maoeventos/';
  private header = new HttpHeaders()
  .set('Content-Type' ,'application/json  ; charset=utf-8');

  private opciones = {
    headers : this.header
  };
  constructor(private http: HttpClient) { }


}
