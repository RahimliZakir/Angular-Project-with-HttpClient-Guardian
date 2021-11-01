import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { AlertifyService } from 'src/services/alertify.service';
import { CategoryService } from 'src/services/category.service';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private service: CategoryService,
    private alertify: AlertifyService,
    private loginService: LoginService
  ) {}

  searcherFrom: string = '';

  categories: Category[] = [];

  ngOnInit() {
    this.alertify.success('Xoş gəlmişsiniz!');

    this.service.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        alert(
          'Məhsulları gətirən zaman xəta baş verdi, biraz sonra yenidən cəhd edin!'
        );
      }
    );
  }

  pntr: string = 'pointer';

  deleteCategory(category: Category): void {
    let result: boolean = confirm(
      'Seçilmiş məhsulu silmək istədiyinizdən əminsiniz?'
    );

    if (result == true) {
      this.service.removeCategory(category).subscribe(
        (success) => {
          this.alertify.success(
            `Başlığı ${category.name} olan məhsul, uğurla silindi!`
          );
          setTimeout(() => {
            window.location.reload();
          }, 500);
        },
        (error) => {
          this.alertify.error('Silinən zaman xəta baş verdi!');

          this.loginService.TimeOut();
        }
      );
    }
  }
}
