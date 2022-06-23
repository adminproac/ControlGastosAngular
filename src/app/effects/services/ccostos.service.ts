import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ccosto } from '../../store';


@Injectable({
  providedIn: 'root'
})
export class CcostosService {
  API_URL: string = 'http://localhost:3000/ccostos'
  httpOpt = {
    headers: new HttpHeaders({
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getCCostos = () => {
    return this.http.get<ccosto[]>(`${this.API_URL}`)
  }

  delCCostos = (id: number) => {
    return this.http.delete(`${this.API_URL}/${id}`)
  }

  updCCostos = (ccosto: ccosto) => {
    return this.http.put(`${this.API_URL}/${ccosto.id}`, JSON.stringify(ccosto), this.httpOpt)
  }

  insCCostos = (ccosto: ccosto) => {
    return this.http.post(`${this.API_URL}`, JSON.stringify(ccosto), this.httpOpt)
  }

}



