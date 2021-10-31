import { BaseEntity } from './baseentity';

export class Product extends BaseEntity {
  title!: string;
  description!: string;
  price!: number;
  categoryId!: number;
  imagePath!: string;
}
