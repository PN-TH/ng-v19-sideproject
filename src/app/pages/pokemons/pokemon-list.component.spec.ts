import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonSearchComponent } from '../../components/pokemon/pokemon-search/pokemon-search.component';
import { PokemonCardComponent } from '../../components/pokemon/pokemon-card/pokemon-card.component';
import { By } from '@angular/platform-browser';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonListComponent, PokemonSearchComponent, PokemonCardComponent],
      providers: [PokemonService],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    pokemonService = TestBed.inject(PokemonService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Pokémon cards', () => {
    const pokemonCards = fixture.debugElement.queryAll(By.css('pokemon-card'));
    expect(pokemonCards.length).toBeGreaterThan(0);
  });

  it('should filter Pokémon when searching', fakeAsync(() => {
    spyOn(pokemonService, 'searchPokemon').and.callThrough();

    const searchComponent = fixture.debugElement.query(By.directive(PokemonSearchComponent)).componentInstance;

    searchComponent.searchQueryChange.emit('Pikachu');
    tick(600); 
    fixture.detectChanges(); 

    expect(pokemonService.searchPokemon).toHaveBeenCalledWith('Pikachu');

    const filteredPokemonCards = fixture.debugElement.queryAll(By.css('pokemon-card'));
    console.log('🛠️ Nombre de cartes affichées après filtrage:', filteredPokemonCards.length);
    expect(filteredPokemonCards.length).toBe(1); 
  }));
});
