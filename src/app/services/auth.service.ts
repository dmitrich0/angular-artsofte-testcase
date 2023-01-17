import {Injectable} from '@angular/core';
import {IUser} from "../models/user";
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {

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

  checkAuth() {
    if (localStorage.getItem('loggedIn') === 'false' || localStorage.getItem('loggedIn') === null) {
      this.router.navigate(['/auth'])
    }
  }
}
