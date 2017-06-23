import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-hero-son',
    templateUrl: './hero-son.component.html'

})
export class HeroSonComponent implements OnInit {

    constructor() {
    }

    @Input() list: Array<Object>;



    ngOnInit() {

    }
    toggle(item) {
        item.hide = !item.hide;
    }

}
