import { Injectable } from '@angular/core';
import { dataType } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getData(){
    const data:dataType = {
      name: 'gon',
      id: 1,
      indian: false,
      address: 'HxH Japan 2011'
    }
    return data;
  }
}
