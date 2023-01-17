import {Injectable} from '@angular/core';
import {IUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  register(user: IUser): string {
    if (!localStorage.getItem(user.login)) {
      localStorage.setItem(user.login, user.password);
      return '';
    }
      return 'Пользователь с таким логином уже существует!';
  }


  login(user: IUser): string {
    if (!localStorage.getItem(user.login)) {
      return 'Пользователь с таким логином не найден!';
    } else if (localStorage.getItem(user.login) !== user.password) {
      return 'Неверный пароль!';
    }
    else {
      return '';
    }
  }
}
