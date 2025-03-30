import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILevarReceber } from '../models/ILevarReceber.interface';
import { Observable } from 'rxjs';
import { IFormLevarReceber } from '../models/IFormLevarReceber.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  apiUrl: string = 'http://localhost:5000/api/v1/';

  constructor(private http: HttpClient) { }

receberLevarReceber():Observable<ILevarReceber> {
  return this.http.get<ILevarReceber>(`${this.apiUrl}vendas/levar-receber`);
  }

enviarLevarReceber(dados: IFormLevarReceber): Observable<ILevarReceber> {      
  return this.http.post<ILevarReceber>(`${this.apiUrl}vendas/levar-receber`, dados);
  }

}