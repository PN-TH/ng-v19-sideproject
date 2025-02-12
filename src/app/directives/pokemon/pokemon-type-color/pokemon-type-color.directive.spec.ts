import { PokemonTypeColorDirective } from './pokemon-type-color.directive';
import { PokemonColor } from '../../../enum/pokemon-color.enum';
import { ElementRef, Renderer2 } from '@angular/core';

describe('PokemonTypeColorDirective', () => {
    let directive: PokemonTypeColorDirective;
    let mockElementRef: ElementRef;
    let mockRenderer: jasmine.SpyObj<Renderer2>;

    beforeEach(() => {
        mockElementRef = new ElementRef(document.createElement('span'));
        mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'listen']);
        directive = new PokemonTypeColorDirective(mockElementRef, mockRenderer);
    });

    it('should create directive', () => {
        expect(directive).toBeTruthy();
    });

    it('should apply the correct background color for a known type', () => {
        directive.type = 'Feu';
        directive.classPrefix = 'backgroundColor';
        directive.ngOnChanges();

        expect(mockRenderer.setStyle).toHaveBeenCalledWith(
            mockElementRef.nativeElement,
            'backgroundColor',
            PokemonColor.FEU
        );
    });

    it('should apply the default background color for an unknown type', () => {
        directive.type = 'Inconnu';
        directive.classPrefix = 'backgroundColor';
        directive.ngOnChanges();

        expect(mockRenderer.setStyle).toHaveBeenCalledWith(
            mockElementRef.nativeElement,
            'backgroundColor',
            PokemonColor.DEFAULT
        );
    });
});

