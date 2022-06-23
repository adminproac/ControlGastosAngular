import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cuenta } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  API_URL: string = 'http://localhost:3000/Cuentas'

  constructor(private http: HttpClient) { }

  getCuentas = () => {
    return this.http.get<cuenta[]>(`${this.API_URL}`)
  }
}