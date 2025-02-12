import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonButtonComponent } from '../../common/common-button/common-button.component';
import { HpStatusPipe } from '../../../pipes/hp-status/hp-status.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pokemon-life',
  imports: [CommonButtonComponent, HpStatusPipe, CommonModule],
  templateUrl: './pokemon-life.component.html',

})
export class PokemonLifeComponent implements OnInit {
  @Input() life!: number;
  initialLife!: number;

  ngOnInit(): void {
    this.initialLife = this.life;
  }

  increaseLife(): void {
    if (this.life && this.life < this.initialLife) {

      this.life += 1;
    }
  }

  decreaseLife(): void {
    if (this.life && this.life > 0) {
      this.life -= 1;
    }
  }
}
