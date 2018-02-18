import { Component, OnInit } from '@angular/core';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { pokemon } from './gql/pokemon.query'
import { Pokemon, PokemonQueryResponse } from './pokedex.types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  apollo: Apollo;

  currentPokemonName: any = 'No pokemon has been retrieved yet';

  constructor(apollo: Apollo) {
    this.apollo = apollo;
  }

  ngOnInit() {
    this.getPokemon("pikachu").subscribe((res) => {
      this.currentPokemonName = res.pokemon.name;
    });
  }

  getPokemon(pokemonName: string) {
    return this.apollo
      .watchQuery<PokemonQueryResponse>({
        query: pokemon,
        variables: { pokemonName },
      })
      .valueChanges
      .map(res => res.data)
  }
}
