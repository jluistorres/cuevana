import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'runtime'
})
export class RuntimePipe implements PipeTransform {

  transform(value: number): any {
    const hours = Math.floor(value / 60); // 123/60=2.05
    const minutes = value % 60; // 123 % 60 = 3
    return `${hours}h ${minutes}m`;
  }

}
