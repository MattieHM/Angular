import { Pipe, PipeTransform } from '@angular/core';
// import { MyUser } from '../components/user-in/user-in.component';
import { isNgTemplate } from '@angular/compiler';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {
  // users: MyUser[] = [];
  transform(users, value) {
    return users.filter(user => {
      return user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1

      // return user.name.includes(value)
    });
  }

}
