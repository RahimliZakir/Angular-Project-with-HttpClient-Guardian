import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/models/category';
import { AlertifyService } from 'src/services/alertify.service';
import { CategoryService } from 'src/services/category.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  constructor(
    private service: CategoryService,
    private router: Router,
    private alertify: AlertifyService,
    private loginService: LoginService
  ) {}

  category: Category = new Category();

  ngOnInit() {}

  AddPost(): void {
    this.service.addCategory(this.category).subscribe(
      (success) => {
        this.alertify.success('Yeni məlumatlar uğurla əlavə olundu!');
        setTimeout(() => {
          this.router.navigate(['/categories']);
        }, 1000);
      },
      (error) => {
        this.alertify.error('Məlumatlar əlavə olunan zaman xəta baş verdi!');

        this.loginService.TimeOut();
      }
    );
  }

  BackToHome(): void {
    this.router.navigate(['/categories']);
  }
}
