/**
 * Created by smallKugua on 2016/9/25.
 */
import { Component,OnInit,OnChanges,ViewChild } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';
import { HeroTestComponent} from './hero-test-component';
@Component({
    selector: 'my-dashboard',
    //template: '<h3>My Dashboard</h3>'
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent {
    heroes:Hero[]= [];
    inputName:String = '001';
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

    major: number = 1;
    minor: number = 23;
    newMinor() {
        this.minor++;
    }
    newMajor() {
        this.major++;
        this.minor = 0;
    }

    showTest(isShow:boolean):void{

    }
    agreed = 0;
    disagreed = 0;
    voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }
    seconds() { return 0; }
    ngAfterViewInit() {
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode
        // unidirectional-data-flow-violation error
        setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
    }
    @ViewChild(HeroTestComponent)
    private timerComponent:HeroTestComponent;
    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
}