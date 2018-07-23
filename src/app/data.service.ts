import { Injectable } from '@angular/core';
import { User } from './lib/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:User;
  constructor() { }

  login(user:string,pass:string){
    this.user={};
  }
}
