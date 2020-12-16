import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimName'
})
export class TrimNamePipe implements PipeTransform {

  transform(value: any) {
    if (!value) {
      return '';
    }
    // name.replace(/\s+/g,' ');
    return value.trim();
  }


}
