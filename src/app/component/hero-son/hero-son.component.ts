import {Component, OnInit,Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-hero-son',
    templateUrl: './hero-son.component.html',
    styleUrls: ['./hero-son.component.less']

})
export class HeroSonComponent implements OnInit {

    constructor() {
    }

    @Input() list: Array<Object>;


    //自定义事件 可以使用别名
    @Output() deleteRequest = new EventEmitter<Object>();

    ngOnInit() {
    }
    delete = function (obj) {
        this.deleteRequest.emit(obj);
    }
}
