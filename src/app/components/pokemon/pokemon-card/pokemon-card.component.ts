import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "../../../models/pokemon";
import { CommonButtonComponent } from "../../common/common-button/common-button.component";
import { PokemonTypeComponent } from "../pokemon-type/pokemon-type.component";
import { PokemonTypeColorDirective } from "../../../directives/pokemon/pokemon-type-color/pokemon-type-color.directive";
import { DatePipe } from "@angular/common";
import { PokemonLifeComponent } from "../pokemon-life/pokemon-life.component";

@Component({
  selector: "pokemon-card",
  standalone: true,
  templateUrl: "./pokemon-card.component.html",
  imports: [PokemonTypeComponent, PokemonTypeColorDirective, DatePipe, PokemonLifeComponent],
})
export class PokemonCardComponent {
  @Input() pokemon!: Pokemon;
}
