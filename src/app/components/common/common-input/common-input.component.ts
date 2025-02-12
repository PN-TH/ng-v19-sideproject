import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importer CommonModule

@Component({
  selector: 'common-input',
  standalone: true,
  templateUrl: './common-input.component.html',
  imports: [CommonModule],
})
export class CommonInputComponent {
  @Input() label?: string;
  @Input() icon?: string;
  @Input() isLoading?: boolean;
  @Input() inputProps: Partial<HTMLInputElement> = {};

  @Output() searchValue = new EventEmitter<string>();

  value: string = '';
  disabled: boolean = false;

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue.emit(target.value);
  }
}
