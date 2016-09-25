import {OnInit, Component } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private heroService: HeroService ){

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
}
