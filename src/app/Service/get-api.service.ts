import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

getUserInfo(par){
    // console.log(par);
     return  this.http.get('http://localhost:3000/user',{
       params:par
     });
}

getBookingsInfo(upOrpastData){
  // console.log(par);
   return  this.http.get('http://localhost:3000/bookingsData',{
     params: upOrpastData
   });
}

getFAQsData(){

  return this.http.get('http://localhost:3000/faqsData');
}

getBookingsCount(){

  return this.http.get('http://localhost:3000/bookingsData');
}

getById(id) {
  return this.http.get('http://localhost:3000/user/'+id);
}
}