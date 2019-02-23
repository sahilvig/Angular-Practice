import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import {Observable, of } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  users = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
  constructor(private http: HttpClient,private router: Router) {
   }
  baseUrl: string = 'http://localhost:4200';
 
  getUsers() {
    return of(this.users);
  }

  getUserById(id: number) {
    var item = this.users.filter(function(item) {
      return item.id === id;
    })[0];
    return of(item);
  }

  createUser(user: User): Observable<User[]> {
    user.id = this.users.length + 1;
    this.users.push(user);
    return of(this.users);
}

  updateUser(user: User) {
    this.users = this.users.filter(person => person.id != user.id);
    this.users.push(user);
    return of(this.users);
  }

  deleteUser(id: number) {
    this.users = this.users.filter(person => person.id != id);
    return of(this.users);
  }
}