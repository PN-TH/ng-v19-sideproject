import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonCardComponent } from './pokemon-card.component';
import { PokemonTypeComponent } from '../pokemon-type/pokemon-type.component';
import { PokemonTypeColorDirective } from '../../../directives/pokemon/pokemon-type-color/pokemon-type-color.directive';
import { Pokemon } from '../../../models/pokemon';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardComponent, PokemonTypeComponent, PokemonTypeColorDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Pokémon name', async () => {
    component.pokemon = { name: 'Pikachu', types: ['Électrik'] } as Pokemon;
    fixture.detectChanges();

    const nameElement = element.querySelector('h3');
    expect(nameElement).toBeTruthy();
    expect(nameElement?.textContent?.trim()).toBe('Pikachu');
  });

});
