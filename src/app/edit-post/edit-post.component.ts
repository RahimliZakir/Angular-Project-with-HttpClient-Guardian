import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/models/post';
import { AlertifyService } from 'src/services/alertify.service';
import { LoginService } from 'src/services/login.service';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(private router: Router, private alertify: AlertifyService, private postsService: PostService,
    private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  eid: number = 0;

  post: Post = new Post();

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.eid = param["editId"];

      this.postsService.GetPostById(this.eid).subscribe(data => {
        this.post = data;
      })
    });
  }

  BackToHome(): void {
    this.router.navigate(["/posts"]);
  }

  EditPost(): void {
    this.postsService.PutPost(this.post).subscribe(
      success => {
        this.alertify.success(`Başlığı ${this.post.title} olan məhsul uğurla yeniləndi!`);

        setTimeout(() => {
          this.router.navigate(["/posts"]);
        }, 1000);

      },
      error => {
        this.alertify.error(`Başlığı ${this.post.title} olan məhsul yenilənən zaman xəta baş verdi!`);

        this.loginService.TimeOut();
      }
    );
  }
}
