import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/product';
import { AlertifyService } from 'src/services/alertify.service';
import { LoginService } from 'src/services/login.service';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  constructor(
    private service: ProductService,
    private router: Router,
    private alertify: AlertifyService,
    private loginService: LoginService
  ) {}

  product: Product = new Product();

  ngOnInit() {}

  addPost(): void {
    this.service.addProduct(this.product).subscribe(
      (success) => {
        this.alertify.success('Yeni məlumatlar uğurla əlavə olundu!');
        setTimeout(() => {
          this.router.navigate(['/products']);
        }, 1000);
      },
      (error) => {
        this.alertify.error('Məlumatlar əlavə olunan zaman xəta baş verdi!');

        this.loginService.TimeOut();
      }
    );
  }

  backToHome(): void {
    this.router.navigate(['/products']);
  }
}
