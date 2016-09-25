import {OnInit, Component } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import{ Router } from '@angular/router'
@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
    constructor(
        private router:Router,
        private heroService:HeroService){

    }
    title =  'xiaotian';
    heroes:Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero):void{
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    gotoDetail():void{
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
