import { Component, OnInit } from '@angular/core';
import { LoginForm, LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public loginService: LoginService) {}

  user: LoginForm = new LoginForm();

  signIn(): void {
    this.loginService.SignIn(this.user);
  }

  title = 'MyAngularGuardianAPIControlCenter';
}
