import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  prodId: number = 0;

  name: string = "";
  surname: string = '';

  product: any = {};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.prodId = param["prodId"];
      this.product = this.productService.GetProductById(this.prodId);
    });

    this.activatedRoute.queryParams.subscribe(qparam => {
      this.name = qparam["name"];
      this.surname = qparam["surname"];
    });
  }

}
