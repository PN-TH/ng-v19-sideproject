import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonLifeComponent } from './pokemon-life.component';
import { CommonButtonComponent } from '../../common/common-button/common-button.component';

describe('PokemonLifeComponent', () => {
  let component: PokemonLifeComponent;
  let fixture: ComponentFixture<PokemonLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonLifeComponent, CommonButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonLifeComponent);
    component = fixture.componentInstance;
    component.life = 5;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize initialLife correctly', () => {
    expect(component.initialLife).toBe(5);
  });

  it('should increase life by 1 when increaseLife is called', () => {
    component.life = 4;
    component.increaseLife();
    expect(component.life).toBe(5);
  });

  it('should decrease life by 1 when decreaseLife is called', () => {
    component.decreaseLife();
    expect(component.life).toBe(4);
  });

  it('should not increase life beyond initialLife', () => {
    component.life = 5;
    component.initialLife = 5;
    component.increaseLife();
    expect(component.life).toBe(5);
  });

  it('should not decrease life below 0', () => {
    component.life = 0;
    console.log("🚀 ~ it ~ component:", component)
    component.decreaseLife();
    expect(component.life).toBe(0);
  });
});
