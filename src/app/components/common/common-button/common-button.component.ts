import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-button',
  standalone: true,
  templateUrl: './common-button.component.html',
})
export class CommonButtonComponent {
  @Input() type: "submit" | "button" = "button";
  @Input() color: "primary" | "secondary" | "danger" = "primary";
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  get buttonClass(): string {
    const base = "rounded-md px-2 py-1 text-center text-white shadow-xs transition focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer";

    const typeClass = {
      primary: "bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600",
      secondary: "bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600",
      danger: "bg-red-600 hover:bg-red-500 focus-visible:outline-red-600",
    }[this.color];

    const sizeClass = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base px-4 py-3",
    }[this.size];

    return `${base} ${typeClass} ${sizeClass} ${this.fullWidth ? 'w-full' : ''} ${this.disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  }

  onClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
