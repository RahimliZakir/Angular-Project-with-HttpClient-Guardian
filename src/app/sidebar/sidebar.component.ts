import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  pntr: string = 'pointer';

  loginSidebar(): void {
    this.loginService.TimeOut();
  }
}
