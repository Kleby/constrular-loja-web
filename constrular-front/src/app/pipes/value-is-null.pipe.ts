import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueIsNull'
})
export class ValueIsNullPipe implements PipeTransform {

  transform(value: string | undefined | null, message: string): string {
    return value === null ? message : value ??"";
  }

}
