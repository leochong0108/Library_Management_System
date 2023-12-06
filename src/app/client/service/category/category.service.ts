import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private HttpClient : HttpClient) { }

  getAllCategory(){
    return this.HttpClient.get<any>(`${environment.apiUrl}/Categories/GetAll`)
  }

}
