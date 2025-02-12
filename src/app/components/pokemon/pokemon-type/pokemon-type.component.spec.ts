import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonTypeComponent } from './pokemon-type.component';
import { PokemonColor } from '../../../enum/pokemon-color.enum';
import { hexToRgb } from '../../../utils/colors';

describe('PokemonTypeComponent', () => {
  let component: PokemonTypeComponent;
  let fixture: ComponentFixture<PokemonTypeComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTypeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonTypeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply the correct background color for "Feu" type', () => {
    component.type = 'Feu';
    fixture.detectChanges();

    const span = element.querySelector('span') as HTMLElement;
    expect(span.style.backgroundColor).toBe(hexToRgb(PokemonColor.FEU));
  });

  it('should apply the default color for an unknown type', () => {
    component.type = 'Type inconnu';
    fixture.detectChanges();

    const span = element.querySelector('span') as HTMLElement;
    expect(span.style.backgroundColor).toBe(hexToRgb(PokemonColor.DEFAULT));
  });
});
