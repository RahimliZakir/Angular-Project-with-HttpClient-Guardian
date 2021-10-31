import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private login: LoginService) {}

  apiLink: string = 'https://localhost:44375/api/products';
  token: string = this.login.GetToken();

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiLink, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  getProductById(id: number): Observable<Product> {
    let apiPath: string = `${this.apiLink}${id}`;

    return this.http.get<Product>(apiPath, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiLink, product, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  updateProduct(product: Product): Observable<Product> {
    let apiPath: string = `${this.apiLink}${product.id}`;

    return this.http.put<Product>(apiPath, product, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  deleteProduct(product: Product): Observable<Product> {
    let apiPath: string = `${this.apiLink}${product.id}`;

    return this.http.delete<Product>(apiPath, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
