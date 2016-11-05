/**
 * Created by smallKugua on 2016/9/25.
 */
import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
@Component({
    selector: 'my-dashboard',
    //template: '<h3>My Dashboard</h3>'
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent {
    heroes:Hero[]= [];
    isShow:boolean = false;
    constructor(private heroService: HeroService,
                private router: Router,
    ) { }
    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
    ngOnDestroy() { console.log('ngOnDestroy')}

    showTest(isShow:boolean):void{

    }
}