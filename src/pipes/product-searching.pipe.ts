import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/models/product';

@Pipe({
  name: 'searching',
})
export class ProductSearchingPipe implements PipeTransform {
  transform(products: Product[], searchText: string): Product[] {
    searchText = searchText.toLowerCase();

    return products.filter(
      (p) => p.title.toLowerCase().indexOf(searchText) != -1
    );
  }
}
