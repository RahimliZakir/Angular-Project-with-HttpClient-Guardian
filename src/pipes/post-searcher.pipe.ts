import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/models/post';

@Pipe({
  name: 'postsearcher'
})
export class PostSearcherPipe implements PipeTransform {

  transform(posts: Post[], text: string): Post[] {
    text = text?.toLowerCase();

    return posts.filter(p => p.title.toLowerCase().indexOf(text) != -1);
  }

}
