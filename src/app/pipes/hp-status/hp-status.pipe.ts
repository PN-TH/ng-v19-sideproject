import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hpStatus',
  standalone: true,
})
export class HpStatusPipe implements PipeTransform {
  transform(currentLife: number, maxLife: number, returnType: 'text' | 'class' = 'text'): string {
    const hpRatio = currentLife / maxLife;

    if (returnType === 'class') {
      if (hpRatio <= 0.3) return 'text-red-500';
      if (hpRatio <= 0.7) return 'text-yellow-500';
      return 'text-green-500';
    }

    if (hpRatio <= 0.3) return 'Low HP';
    if (hpRatio <= 0.7) return 'Medium HP';
    return 'High HP';
  }
}
