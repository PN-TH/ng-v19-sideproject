import { Component, Output, EventEmitter } from '@angular/core';
import { CommonInputComponent } from '../../common/common-input/common-input.component';

@Component({
  selector: 'pokemon-search',
  standalone: true,
  templateUrl: './pokemon-search.component.html',
  imports: [CommonInputComponent],
})
export class PokemonSearchComponent {
  /** ✅ Émet un événement vers `PokemonListComponent` */
  @Output() searchQueryChange = new EventEmitter<string>();

  /** ✅ Émet la recherche à chaque changement */
  onSearch(value: string): void {
    this.searchQueryChange.emit(value);
  }
}