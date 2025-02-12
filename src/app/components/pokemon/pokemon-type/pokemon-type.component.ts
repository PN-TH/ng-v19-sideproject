import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeColorDirective } from '../../../directives/pokemon/pokemon-type-color/pokemon-type-color.directive';

@Component({
  selector: 'pokemon-type',
  standalone: true,
  templateUrl: './pokemon-type.component.html',
  imports: [PokemonTypeColorDirective]
})
export class PokemonTypeComponent {
  @Input() type!: string;
}