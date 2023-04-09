import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get("http://localhost:8080/api/getall")
  }
  getbyid(id:any){
    return this.http.get("http://localhost:8080/api/getbyid/"+id)
  }
  save(us: any   ){
    return this.http.post("http://localhost:8080/api/save",us)
  }
  saveone(us: any   ){
    return this.http.post("http://localhost:8080/api/saveone",us)
  }
  getData(param1: string,param2:string,param3:any): Observable<any> {
    const params = new HttpParams().set('datedeb', param1)
    .set('datefin', param2)
    .set('id', param3);
  
    return this.http.get("http://localhost:8080/api/getttt", { params });
  }
}
