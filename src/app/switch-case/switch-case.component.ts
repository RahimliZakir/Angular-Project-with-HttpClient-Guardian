import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.scss']
})
export class SwitchCaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
