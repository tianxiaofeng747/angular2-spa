/**
 * Created by smallKugua on 2016/9/24.
 */

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';
@Component({
    selector: 'my-hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent  {
    hero: Hero;
    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    goBack(): void {
        window.history.back();
    }
}
