import { Component, inject } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonCardComponent } from '../../components/pokemon/pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from '../../components/pokemon/pokemon-search/pokemon-search.component';

@Component({
  selector: 'pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, PokemonSearchComponent],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  readonly #pokemonService = inject(PokemonService);

  readonly pokemons = this.#pokemonService.getPokemons();

  search(query: string) {
    this.#pokemonService.searchPokemon(query);
  }
}
