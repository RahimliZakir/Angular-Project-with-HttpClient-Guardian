import { BaseEntity } from './baseentity';

export class Post extends BaseEntity {
  title!: string;
  description!: string;
  imagePath!: string;
  replyCount!: number;
}
