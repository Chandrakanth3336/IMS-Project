import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateStudentService {

  public baseurl:string='https://62b9299dff109cd1dc8ca34f.mockapi.io/students';

  constructor(private httpClient:HttpClient) { }

  createStudents(payload:any):Observable<any>{
    // console.log('2');
    return this.httpClient.post(this.baseurl,payload);
  }

  getStudent():Observable<any>{
    return this.httpClient.get(this.baseurl)
  }
  
  getStudents(id:string):Observable<any>{
    return this.httpClient.get(this.baseurl+"/"+id)
  }

  getPaginaated(zxcv:any,asdf:any):Observable<any>{
    return this.httpClient.get(this.baseurl+"?limit="+zxcv + "&page="+asdf);
  }

  getSorting(column:any,order:any):Observable<any>{
    return this.httpClient.get(this.baseurl+"?sortBy="+column+"&order="+order)
  }

  getFiltered(search:any):Observable<any>{
    return this.httpClient.get(this.baseurl+"?filter="+search);
  }

  getUpdate(data:any,id:any):Observable<any>{
    return this.httpClient.put(this.baseurl+'/'+id,data);
  }

  getDelete(id:string):Observable<any>{
    return this.httpClient.delete(this.baseurl+'/'+id);
  }
}
