import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private service: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  product: any = {};

  identify: number = 0;

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.identify = param['id'];

      this.service.getProductById(this.identify).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {}
      );
    });
  }
}
