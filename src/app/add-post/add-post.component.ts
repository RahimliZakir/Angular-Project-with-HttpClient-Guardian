import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/models/post';
import { AlertifyService } from 'src/services/alertify.service';
import { LoginService } from 'src/services/login.service';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router, private alertify: AlertifyService, private loginService: LoginService) { }

  post: Post = new Post();

  ngOnInit() {
  }

  AddPost(): void {
    this.postService.AddPost(this.post).subscribe(
      success => {
        this.alertify.success("Yeni məlumatlar uğurla əlavə olundu!");
        setTimeout(() => {
          this.router.navigate(["/posts"]);
        }, 1000);
      }, error => {
        this.alertify.error("Məlumatlar əlavə olunan zaman xəta baş verdi!");

        this.loginService.TimeOut();
      });
  }

  BackToHome(): void {
    this.router.navigate(["/posts"]);
  }
}
