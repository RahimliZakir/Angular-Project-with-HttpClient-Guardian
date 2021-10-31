import { Component, OnInit } from '@angular/core';
import { Post } from 'src/models/post';
import { AlertifyService } from 'src/services/alertify.service';
import { LoginService } from 'src/services/login.service';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postService: PostService,
    private alertify: AlertifyService,
    private loginService: LoginService
  ) {}

  searcherFrom: string = '';

  posts: Post[] = [];

  ngOnInit() {
    this.alertify.success('Xoş gəlmişsiniz!');

    this.postService.GetPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        alert(
          'Məhsulları gətirən zaman xəta baş verdi, biraz sonra yenidən cəhd edin!'
        );
      }
    );
  }

  pntr: string = 'pointer';

  authorImgStyle: any = {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
  };

  RemovePost(post: Post): void {
    let result: boolean = confirm(
      'Seçilmiş məhsulu silmək istədiyinizdən əminsiniz?'
    );

    if (result) {
      this.postService.DeletePost(post.id).subscribe(
        (success) => {
          this.alertify.success(
            `Başlığı ${post.title} olan məhsul, uğurla silindi!`
          );
          setTimeout(() => {
            window.location.reload();
          }, 500);
        },
        (error) => {
          this.alertify.error('Silinən zaman xəta baş verdi!');

          this.loginService.TimeOut();
        }
      );
    }
  }
}
