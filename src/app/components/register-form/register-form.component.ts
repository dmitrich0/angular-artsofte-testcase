import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
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

  submit() {
    const user: IUser = {
      login: this.registerForm.value.login as string,
      password: this.registerForm.value.password as string
    };
    const result = this.authService.register(user);
    if (result.length) {
      alert(result);
      this.registerForm.reset();
    }
    else{
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/companies']);
    }
  }

  ngOnInit(): void {
  }
}
