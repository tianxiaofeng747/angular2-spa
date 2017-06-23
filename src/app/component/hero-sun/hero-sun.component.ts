import {Component, OnInit,Input} from '@angular/core';

@Component({
    selector: 'app-hero-sun',
    templateUrl: './hero-sun.component.html'
})
export class HeroSunComponent implements OnInit {

    constructor() {
    }

    myContext = {$implicit: 'World', localSk: 'Svet'};

    @Input()list:Array<Object>;
    ngOnInit() {
    }

    linkFuc() {

    }
}
