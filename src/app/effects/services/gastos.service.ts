import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gasto } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  API_URL: string = 'http://localhost:3000/gastos'
  httpOpt = {
    headers: new HttpHeaders({
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getGastos = () => {
    return this.http.get<gasto[]>(`${this.API_URL}`)
  }

  delGasto = (id: number) => {
    return this.http.delete(`${this.API_URL}/${id}`)
  }

  updGasto = (gasto: gasto) => {
    return this.http.put(`${this.API_URL}/${gasto.id}`, JSON.stringify(gasto), this.httpOpt)
  }

  insGasto = (gasto: gasto) => {
    return this.http.post(`${this.API_URL}`, JSON.stringify(gasto), this.httpOpt)
  }

}