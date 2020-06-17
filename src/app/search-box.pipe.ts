import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(items: any[], searchText: string) {
    if (!items) { return []; }
    if (!searchText) { return items; }
    const searchTxt = searchText.toLowerCase();
    return items.filter( eve => {
       return eve.name.toLowerCase().indexOf(searchTxt) !== -1;
     });
   }
}
