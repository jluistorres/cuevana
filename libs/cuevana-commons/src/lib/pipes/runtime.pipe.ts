import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: number): any {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    return `${hours}h ${minutes}m`;
  }

}
