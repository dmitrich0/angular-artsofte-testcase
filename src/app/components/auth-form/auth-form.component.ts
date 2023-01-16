import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  constructor() {
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

  ngOnInit(): void {
  }
}
