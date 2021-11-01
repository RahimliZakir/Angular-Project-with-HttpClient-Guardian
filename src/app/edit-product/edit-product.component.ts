import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/product';
import { AlertifyService } from 'src/services/alertify.service';
import { LoginService } from 'src/services/login.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  constructor(
    private router: Router,
    private alertify: AlertifyService,
    private service: ProductService,
    private activatedRoute: ActivatedRoute,
    private loginService: LoginService
  ) {}

  product: Product = new Product();

  id: number = 0;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param['id'];

      this.service.getProductById(this.id).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          this.alertify.error(
            `Başlığı ${this.product.title} olan məhsul yenilənən zaman xəta baş verdi!`
          );

          this.loginService.TimeOut();
        }
      );
    });
  }

  updateProduct(): void {
    this.service.updateProduct(this.product).subscribe(
      (success) => {
        this.alertify.success(
          `${this.product.title} başlıqlı məhsul uğurla yeniləndi!`
        );
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 1000);
      },
      (error) => {
        this.alertify.error('Məhsul yenilənən zaman xəta baş verdi!');
      }
    );
  }

  backToHome(): void {
    this.router.navigate(['/products']);
  }
}
