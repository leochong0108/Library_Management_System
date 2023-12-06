import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AllBookService {

  constructor(private HttpClient : HttpClient) { }

  getAllBook(){
    return this.HttpClient.get<any>(`${environment.apiUrl}/Books/GetAll`)
  }

  getBook(id: string){
    return this.HttpClient.get<any>(`${environment.apiUrl}/Books/`+ id)
  }

  deleteBook(id : string){
    return this.HttpClient.delete<any>(`${environment.apiUrl}/Books/delete/` + id)
  }

  addBook(newBook: any){
    return this.HttpClient.post<any>(`${environment.apiUrl}/Books/Create`,newBook)
  }

  updateBook(id: string, updatedBook: any) {
    return this.HttpClient.put<any>(`${environment.apiUrl}/Books/Update/${id}`, updatedBook);
  }

  getAllCategory(){
    return this.HttpClient.get<any>(`${environment.apiUrl}/Categories/GetAll`)
  }

  addCategory(newCategory: any){
    return this.HttpClient.post<any>(`${environment.apiUrl}/Categories/Create`, newCategory)
  }
}
