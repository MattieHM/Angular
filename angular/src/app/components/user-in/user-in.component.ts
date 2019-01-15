import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

export interface MyUser {
  name?: string;
  surname?: string;
  emails?: string[];
}
@Component({
  selector: 'app-user-in',
  templateUrl: './user-in.component.html',
  styleUrls: ['./user-in.component.css']
})
export class UserInComponent implements OnInit {

  idx: number = -1;
  userForm: FormGroup;
  users: MyUser[] = [];
  buttonTitle: string = 'Добавить пользователя';
  constructor(private userServise: UsersService) {
    this.userForm = new FormGroup({ // создание новой формы
      name: new FormControl(null, [Validators.required]), // поля формы
      surname: new FormControl(null, [Validators.required]),
      emails: new FormArray([ // может быть несколько email, Используем массив
        new FormControl(null, [Validators.required])
      ])
    });
  }

  ngOnInit() {
    this.userServise.trigger.subscribe(data => {
      if (data !== -1) {
        this.buttonTitle = 'Сохранить';
        console.log(data)
        this.idx = data;
        this.userForm.patchValue({
          name: this.userServise.users[this.idx].name,
          surname: this.userServise.users[this.idx].surname,
          emails: this.userServise.users[this.idx].emails
        })
      }
    });
  }
  onUserFormSubmit() {
    if (this.idx !== -1) {
      this.userServise.users[this.idx] = this.userForm.value;
      this.idx = -1;
      this.buttonTitle = 'Добавить пользователя';
    } else {
      this.userServise.users.push(this.userForm.value);
      this.users.push(this.userForm.value); // данные из формы при сабмите добавляем в массив пользователей
      this.userForm.reset();
    }
    // сброс значений полей формы
  }

  onAddEmail() {
    (<FormArray>this.userForm.controls['emails']).push(new FormControl(null, [Validators.required]));
    // приводим поле формы к типу FormsArray и добавляем
  }

  onDelEmail(index) {
    (<FormArray>this.userForm.controls['emails']).removeAt(index); // приводим поле формы к типу FormsArray и удаляем элемент по интедксу
  }
}
