import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/models/category';
import { CategoryService } from 'src/services/category.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent implements OnInit {
  constructor(
    private service: CategoryService,
    private loginService: LoginService,
    private activatedRoute: ActivatedRoute
  ) {}

  centered: string = 'center';

  category: any = {};

  ident: number = 0;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.ident = param['id'];

      this.service.getCategoryById(this.ident).subscribe(
        (data) => {
          this.category = data;
        },
        (error) => {
          this.loginService.TimeOut();
        }
      );
    });
  }
}
