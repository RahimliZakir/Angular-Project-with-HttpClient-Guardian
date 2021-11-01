import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/models/category';

@Pipe({
  name: 'categorysearcher',
})
export class CategorySearcherPipe implements PipeTransform {
  transform(category: Category[], searchText: string): Category[] {
    searchText = searchText.toLowerCase();

    return category.filter(
      (item) => item.name.toLowerCase().indexOf(searchText) != -1
    );
  }
}
