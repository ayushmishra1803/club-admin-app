import { city } from './../../selection/select-city/interface/selectcity';
import { login } from './../../auth/interface/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login:login[]=[];
  city:string
  club:string;
  
 private access_Token:string;
  selectedCity(data:string){
    if(!data)
    {
      return;
    }
    else{
     
      this.city=data;
    }
  }
  getcity(){
    return this.city;
  }

  setclub(club:string){
    this.club=club;
  }
  getclub(){
    return this.club;
  }
  setToken(token:string){
   
    this.access_Token=token;
   
    
  }
  getToken(){
  
    
    return this.access_Token;
  }

}
