import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from 'src/models/post';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private loginService: LoginService) { }

  link: string = "https://localhost:44375/api/posts";

  GetPosts(): Observable<Post[]> {
    let token: string = this.loginService.GetToken();

    return this.http.get<Post[]>(this.link, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }

  GetPostById(id: number): Observable<Post> {
    let path: string = `${this.link}/${id}`;

    let token: string = this.loginService.GetToken();

    return this.http.get<Post>(path, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }

  AddPost(entity: Post): Observable<Post> {
    let token: string = this.loginService.GetToken();

    return this.http.post<Post>(this.link, entity, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }

  DeletePost(id: number): Observable<Post> {
    let path: string = `${this.link}/${id}`;

    let token: string = this.loginService.GetToken();

    return this.http.delete<Post>(path, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }

  PutPost(entity: Post): Observable<Post> {
    let path: string = `${this.link}/${entity.id}`;

    let token: string = this.loginService.GetToken();

    return this.http.put<Post>(path, entity, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  }
}
