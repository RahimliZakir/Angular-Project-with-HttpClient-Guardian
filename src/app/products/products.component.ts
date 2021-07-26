import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { AlertifyService } from 'src/services/alertify.service';
import { ProductService } from 'src/services/product.service';

declare let alertify: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private alertifyService: AlertifyService) { }

  products: Product[] = [];

  searchText: string = '';

  ngOnInit() {
    this.products = this.productService.GetProducts();

    this.alertifyService.success("Xoş gəlmisiniz!");
  }

}
