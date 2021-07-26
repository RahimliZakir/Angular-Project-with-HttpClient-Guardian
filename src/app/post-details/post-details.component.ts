import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/models/post';
import { LoginService } from 'src/services/login.service';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: any = {};

  postId: number = 0;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.postId = param["id"];

      this.postService.GetPostById(this.postId).subscribe(data => {
        this.post = data;
      },
        error => {
          this.loginService.TimeOut();
        });
    });
  }

}
