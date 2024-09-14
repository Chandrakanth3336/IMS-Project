import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {

  constructor(private httpClient:HttpClient) { }

  createStudents(payload:any):Observable<any>{
    return this.httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",payload);
  }
}
