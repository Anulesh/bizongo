import { ProductListModel } from './../app.model';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'product',
    pure: false
})
export class ProductFilterPipe implements PipeTransform {
  transform(items: ProductListModel[], filter: ProductListModel): ProductListModel[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: ProductListModel) => this.applyFilter(item, filter));
  }
  
  applyFilter(item: ProductListModel, filter: ProductListModel): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
            // console.log(item[field]);
          if (item[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (item[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
