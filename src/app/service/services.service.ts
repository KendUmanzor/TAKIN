import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  //currentUserLoginOn:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  //currentUserData:BehaviorSubject<User> = new BehaviorSubject<User>({id:0,email:""});
  constructor(private http:HttpClient) {
    
  }
  
  login(credentials:any):Observable<any>{
    return this.http.get('././assets/data.json');
  }
}
