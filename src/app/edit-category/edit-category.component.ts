import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/models/category';
import { AlertifyService } from 'src/services/alertify.service';
import { CategoryService } from 'src/services/category.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private service: CategoryService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {}

  category: Category = new Category();

  id: number = 0;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];

      this.service.getCategoryById(this.id).subscribe(
        (data) => {
          this.category = data;
        },
        (error) => {
          this.alertify.error(`Məhsul gətirilən zaman xəta baş verdi!`);
        }
      );
    });
  }

  updateCategory(): void {
    this.service.updateCategory(this.category).subscribe(
      (success) => {
        this.alertify.success(
          `${this.category.name} başlıqlı məhsul uğurla yeniləndi!`
        );
        setTimeout(() => {
          this.router.navigate(['/categories']);
        }, 1000);
      },
      (error) => {
        this.alertify.error(
          `Başlığı ${this.category.name} olan məhsul yenilənən zaman xəta baş verdi!`
        );

        this.loginService.TimeOut();
      }
    );
  }

  backToHome(): void {
    this.router.navigate(['/categories']);
  }
}
