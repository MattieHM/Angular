import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MyUser } from '../user-in/user-in.component';

@Component({
  selector: 'app-user-out',
  templateUrl: './user-out.component.html',
  styleUrls: ['./user-out.component.css']
})
export class UserOutComponent implements OnInit {
  name: MyUser[] = [];
  searchStr = '';
  constructor(private userServise: UsersService) { }

  ngOnInit() {
    this.name = this.userServise.users;
  }
 OnEdit(idx){
   this.userServise.trigger.next(idx);
 }
 OnDelUser(idx){
   this.userServise.users.splice(idx,1)
 }
}
