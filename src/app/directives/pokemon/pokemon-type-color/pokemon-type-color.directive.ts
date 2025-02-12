import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';
import { PokemonColor } from '../../../enum/pokemon-color.enum';

@Directive({
    selector: '[pokemonTypeColor]',
    standalone: true, // ✅ Permet d'utiliser la directive sans app.module.ts
})
export class PokemonTypeColorDirective implements OnChanges {
    @Input('pokemonTypeColor') type!: string;
    @Input("classPrefix") classPrefix?: string;

    private getColorByType(type: string): PokemonColor {

        return PokemonColor[type.toUpperCase() as keyof typeof PokemonColor] || PokemonColor.DEFAULT;
    }

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }


    ngOnChanges(): void {
        if (!this.type || !this.classPrefix) {
            return;
        }

        const color = `${this.getColorByType(this.type)}`;

        if (this.classPrefix.includes('hover')) {
            const splittedClass = this.classPrefix.includes(':') ? this.classPrefix.split(':') : [this.classPrefix];
            this.renderer.setStyle(this.el.nativeElement, 'transition', `0.3s ease-in-out`);
            this.renderer.listen(this.el.nativeElement, 'mouseenter', () => {
                this.renderer.setStyle(this.el.nativeElement, splittedClass[1], `${color}`);

            });
            this.renderer.listen(this.el.nativeElement, 'mouseleave', () => {
                this.renderer.setStyle(this.el.nativeElement, splittedClass[1], 'transparent');

            });

        } else {
            this.renderer.setStyle(this.el.nativeElement, this.classPrefix, color);
        }
    }
}
