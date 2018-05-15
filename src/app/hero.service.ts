import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero'
import {Heroes} from './heroes/heroes'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //normal for mockup data
  getHeroes() : Hero[] {
    return Heroes
  }
  // using observable
  getHeroesByObservable() : Observable<Hero[]> {
    return of(Heroes);
  }
  constructor() { }
}
