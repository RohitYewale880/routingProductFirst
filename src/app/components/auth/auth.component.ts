import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ILogin, ISignIn } from 'src/app/modals/auth';
import { AuthService } from 'src/app/services/auth.service';
import { SnakbarService } from 'src/app/services/snakbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {

  isAllreadyHasAccount: boolean = false
  loginform!: FormGroup
  signupform!: FormGroup
  constructor(
    private authservice: AuthService,
    private snakbar: SnakbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
    this.createSignUpForm()
  }

  createLoginForm() {
    this.loginform = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  createSignUpForm() {
    this.signupform = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required)
    })
  }

  get l() {
    return this.loginform.controls
  }

  get s() {
    return this.signupform.controls
  }

  onLogin() {
    if (this.loginform.invalid) {
      this.loginform.markAllAsTouched()
    } else {
      let userdetails: ILogin = {
        ...this.loginform.value
      }

      this.authservice.login(userdetails).subscribe({
        next: res => {
          this.snakbar.OpenSnakbar(res.message)
          this.authservice.saveToken(res.token)
          this.authservice.saveUserRole(res.userRole)
          this.router.navigate(['/home'])
        }, error: err => {
          this.snakbar.OpenSnakbar(err.error.message)
        }
      })
    }
  }

  onSignup() {
    if (this.signupform.invalid) {
      this.signupform.markAllAsTouched()
    } else {
      let userdetails : ISignIn = {
        ...this.signupform.value
      }

      this.authservice.SignIn(userdetails).subscribe({
        next : res => {
          this.snakbar.OpenSnakbar(res.message)
          this.isAllreadyHasAccount = true
        },
        error : err => {
          this.snakbar.OpenSnakbar(err.error.message)
          this.isAllreadyHasAccount = true
        }
      })
    }
  }
}
