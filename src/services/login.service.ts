import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private alertify: AlertifyService) { }

  loginStatus: boolean = false;

  accPath: string = "https://localhost:44375/api/account";

  SignIn(loginForm: LoginForm): any {
    this.http.post<LoginResult>(this.accPath, loginForm).subscribe(
      data => {
        if (data.error == false) {
          sessionStorage.setItem('token', data.token);
          this.loginStatus = true;
        }
        else if (data.error == true) {
          this.loginStatus = false;
        }
      },
      error => {
        this.loginStatus = false;
        sessionStorage.removeItem('token');

        if (error.status == 401) {
          this.alertify.error("İstifadəçi adı və ya şifrə yanlışdır!");
        }
      }
    );
  }

  IsLoggedin(): boolean {
    return this.loginStatus;
  }

  GetToken(): string {
    return sessionStorage.getItem('token') || '';
  }

  TimeOut() {
    this.loginStatus = false;
    sessionStorage.clear();
  }
}

export class LoginForm {
  username!: string;
  password!: string;
}

export class LoginResult {
  error!: boolean;
  message!: string;
  token!: string;
}