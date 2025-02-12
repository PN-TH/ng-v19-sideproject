import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonSearchComponent } from './pokemon-search.component';
import { CommonInputComponent } from '../../common/common-input/common-input.component';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';

describe('PokemonSearchComponent', () => {
  let component: PokemonSearchComponent;
  let fixture: ComponentFixture<PokemonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSearchComponent, CommonInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSearchComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchQueryChange when input changes', () => {
    spyOn(component.searchQueryChange, 'emit');

    const inputElementDebug = fixture.debugElement.query(By.directive(CommonInputComponent));
    expect(inputElementDebug).toBeTruthy();

    const inputElement = inputElementDebug.componentInstance;

    if (!inputElement.searchValue) {
      inputElement.searchValue = new EventEmitter<string>();
    }

    spyOn(component, 'onSearch').and.callThrough();

    inputElement.searchValue.emit('Pikachu');

    fixture.detectChanges();

    expect(component.onSearch).toHaveBeenCalledWith('Pikachu');
    expect(component.searchQueryChange.emit).toHaveBeenCalledWith('Pikachu');
  });
});
