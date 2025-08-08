import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
})
export class InitialsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (typeof value === 'string' && value.trim().length > 0) {
      const names = value.trim().split(' ');
      if (names.length > 1) {
        return (
          names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()
        );
      }
      return names[0].charAt(0).toUpperCase();
    }
    return '';
  }
}
