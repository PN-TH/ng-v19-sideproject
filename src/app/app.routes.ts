import { Routes } from '@angular/router';
import { PokemonListComponent } from './pages/pokemons/pokemon-list.component';

export const routes: Routes = [
    { path: 'pokemons', component: PokemonListComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }
];
