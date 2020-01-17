import { Injectable } from '@angular/core';

import{Observable} from 'rxjs';
import{HttpClient} from '@angular/common/http'
import { User } from './user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private ht:HttpClient) { }
registerUser(user:User){
  this.ht.get('http://localhost:3000/profile');
}

}

