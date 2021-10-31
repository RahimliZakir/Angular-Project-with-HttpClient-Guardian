import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient, private login: LoginService) {}

  apiLink: string = 'https://localhost:44375/api/categories';
  token: string = this.login.GetToken();

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiLink, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  getCategoryById(id: number): Observable<Category> {
    let apiPath: string = `${this.apiLink}${id}}`;

    return this.http.get<Category>(apiPath, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  removeCategory(category: Category): Observable<Category> {
    let apiPath: string = `${this.apiLink}${category.id}}`;

    return this.http.delete<Category>(apiPath, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiLink, category, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }

  updateCategory(category: Category): Observable<Category> {
    let apiPath: string = `${this.apiLink}${category.id}}`;

    return this.http.put<Category>(apiPath, category, {
      headers: {
        "Authorization": `Bearer ${this.token}`,
      },
    });
  }
}
