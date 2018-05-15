import { Component, OnInit } from '@angular/core';
import {Hero} from './hero'
import {Heroes} from './heroes'
import {HeroService} from '../hero.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  Heroes = Heroes;
  heroes:Hero[];
 
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroesFromServices();
  }
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  getHeroesFromServices(): void {
    // get by normal
    //this.heroes = this.heroService.getHeroes();
    //get by observable
    this.heroService.getHeroesByObservable().subscribe( (heroes) => this.heroes = heroes)
  }
}
