import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { AlertifyService } from 'src/services/alertify.service';
import { LoginService } from 'src/services/login.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  searchProductText: string = '';

  pntr: string = 'pointer';

  constructor(
    private service: ProductService,
    private alertify: AlertifyService,
    private loginService: LoginService
  ) {}

  products: Product[] = [];

  ngOnInit() {
    this.service.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        alert(
          'Məhsulları gətirən zaman xəta baş verdi, biraz sonra yenidən cəhd edin!'
        );
      }
    );
  }

  removeProduct(product: Product): void {
    let resp = confirm('Seçilmiş məhsulu silmək istədiyinizə əminsinizmi?');

    if (resp) {
      this.service.deleteProduct(product).subscribe(
        (success) => {
          this.alertify.success(
            `Başlığı ${product.title} olan məhsul, uğurla silindi!`
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
