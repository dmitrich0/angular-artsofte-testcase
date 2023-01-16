import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() {
  }

  registerForm = new FormGroup({
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
    return this.registerForm.controls.login as FormControl;
  }

  get password() {
    return this.registerForm.controls.password as FormControl;
  }

  ngOnInit(): void {
  }
}
