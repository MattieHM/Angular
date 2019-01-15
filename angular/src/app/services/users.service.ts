import { Injectable } from '@angular/core';
import { MyUser } from '../components/user-in/user-in.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: MyUser[] = [];

  trigger: BehaviorSubject<number>;

  constructor() {
    this.trigger = new BehaviorSubject<number>(-1);
    // this.trigger.value(-1);
  }
}
