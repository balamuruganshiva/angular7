import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class DataService {
   private name:string;
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }

  getEmployee() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }

  setValue(name){
     this.name = name;
  }
  getValue(){
    return this.name;
  }
}
