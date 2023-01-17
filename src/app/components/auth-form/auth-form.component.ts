import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) {
  }

  authForm = new FormGroup({
    login: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ])
  })

  get login() {
    return this.authForm.controls.login as FormControl;
  }

  get password() {
    return this.authForm.controls.password as FormControl;
  }

  submit() {
    const user: IUser = {
      login: this.authForm.value.login as string,
      password: this.authForm.value.password as string
    };
    const result = this.authService.login(user);
    if (result.length) {
      alert(result);
      this.authForm.reset();
    }
    else {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/companies']);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.router.navigate(['/companies'])
    }
  }
}
