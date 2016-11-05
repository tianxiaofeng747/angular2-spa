import { Component, OnInit,Input  } from '@angular/core';
@Component({
    selector:'hero-test',
    //template:'<h4 *ngIf="isShow">小田 test  {{ isShow}}</h4>',
    templateUrl:'./hero-test-component.html'
})
export class HeroTestComponent {
    @Input()  isShow:boolean;
    constructor(){

    }

}