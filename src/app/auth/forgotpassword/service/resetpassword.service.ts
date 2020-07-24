import { Injectable } from '@angular/core';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor() { }
  email:string;
  setemail(email:string)
  {
    this.email=email;
  }
  getemail(){
    return this.email;
    }
 
}
