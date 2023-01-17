import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users() {
    return [
      { name: 'akash', email: 'akash@test.com', age: 79 },
      { name: 'gon', email: 'gon@test.com', age: 97 },
      { name: 'luffy', email: 'luffy@test.com', age: 83 },
      { name: 'eren', email: 'eren@test.com', age: 56 },
    ]
  }
}
