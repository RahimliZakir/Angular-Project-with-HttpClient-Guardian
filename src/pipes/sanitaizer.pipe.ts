import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitaizer'
})
export class SanitaizerPipe implements PipeTransform {
  // modern TypeScript
  transform(value?: string, args?: any): unknown {
    let pattern = new RegExp(/<[^>]*>/gi);

    return value?.replace(pattern, "");
  }

}
