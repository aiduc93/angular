import { Injectable } from '@angular/core';
import {Hero} from './heroes/hero'
import {Heroes} from './heroes/heroes'
import {MessageService} from './message.service'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  //normal for mockup data
 
  constructor(private messageService:MessageService) { }
  getHeroes() : Hero[] {
    
    return Heroes
  }
  // using observable
  getHeroesByObservable() : Observable<Hero[]> {
    this.messageService.add('Duc added');
    return of(Heroes);
  }
}
