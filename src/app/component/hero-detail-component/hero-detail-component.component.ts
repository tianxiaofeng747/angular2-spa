import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-hero-detail-component',
    templateUrl: './hero-detail-component.component.html',
    styleUrls: ['./hero-detail-component.component.less']
})
export class HeroDetailComponentComponent implements OnInit {

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        
    }

    urlId: Number = this.route.snapshot.params['id'];
}
