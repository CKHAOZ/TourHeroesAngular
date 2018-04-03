import { Injectable } from '@angular/core';
import { Hero } from '../app/heroes/hero';
import { Heroes } from '../app/heroes/mock.heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(Heroes);
  }

}
