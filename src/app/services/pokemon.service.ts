import { Injectable, signal, computed } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { POKEMON_LIST } from '../mocks/pokemons';
import { debounceSignal } from '../utils/debounce';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly allPokemons = signal<Pokemon[]>(POKEMON_LIST);
  private readonly searchQuery = signal<string>('');
  private readonly debouncedQuery = debounceSignal(this.searchQuery, 500);

  readonly filteredPokemons = computed(() => {
    const query = this.debouncedQuery().toLowerCase().trim();
    console.log('🔄 Filtrage en cours avec query:', query);

    const result = query
      ? this.allPokemons().filter(pokemon => pokemon.name.toLowerCase().includes(query))
      : this.allPokemons();

    console.log('✅ Résultats après filtrage:', result);
    return result;
  });


  constructor() { }

  getPokemons() {
    return this.filteredPokemons;
  }

  searchPokemon(query: string) {
    this.searchQuery.set(query);
  }
}
