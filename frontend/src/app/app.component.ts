import { Component, OnInit } from '@angular/core';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Observable } from 'apollo-client/util/Observable';
import 'rxjs/add/operator/map';

import { pokemon } from './gql/pokemon.query'

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
    this.currentPokemonName = this.apollo.watchQuery<any>({
      query: pokemon
    })
      .valueChanges
      .subscribe((res) => {
        this.currentPokemonName = res.data.pokemon.name;
        console.log(JSON.stringify(res));
      });  
  }
}
