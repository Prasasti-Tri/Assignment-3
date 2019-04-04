import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) { }

  updateData(id,data){
    console.log(id);
    return this.http.put("http://localhost:3000/user/"+id,data);

  }
}
