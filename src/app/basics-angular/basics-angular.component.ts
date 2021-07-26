import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-angular',
  templateUrl: './basics-angular.component.html',
  styleUrls: ['./basics-angular.component.scss']
})
export class BasicsAngularComponent implements OnInit {

  constructor() { }

  content: string = "Yaşa Azərbaycan!";
  writings: string = '';

  ClickTrigger(): void {
    alert("Clicked! :)");
  }

  numArr: Array<number> = [1, 5, 4, 6, 3, 9, 2, 7, 10, 8];

  Sorter(): number[] {
    let sortedNumArr = this.numArr.sort(function (a, b) {
      return a - b;
    });

    return sortedNumArr;
  }

  bigger: string = "2rem";

  mainStyles: any = {
    fontWeight: "600",
    color: 'teal',
    textAlign: "center"
  };

  ngOnInit() {

  }

}
