import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pago } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class PagosService {
  API_URL: string = 'http://localhost:3000/Pagos'

  constructor(private http: HttpClient) { }

  getPagos = () => {
    return this.http.get<pago[]>(`${this.API_URL}`)
  }
}