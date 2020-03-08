import { Injectable } from '@angular/core';
import { Endpoint } from '../models/endpoint';
import { ApiService } from './api.service'
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(private httpClient: HttpClient) { }

  getAllEndpoints(): Observable<Endpoint[]> {
    return this.httpClient.get<Endpoint[]>(ApiService.apiURL + '/endpoints')
  }

  addEndpoint(data){
    return this.httpClient.post<Endpoint>(ApiService.apiURL + '/endpoints', JSON.stringify(data), ApiService.httpOptions);
  }
}
