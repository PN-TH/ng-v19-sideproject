import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all pokemons initially', () => {
    const pokemons = service.getPokemons()();
    expect(pokemons.length).toBeGreaterThan(0);
  });
});
