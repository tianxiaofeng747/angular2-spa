import { Component,ElementRef, ViewChild,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
interface Style {
    marginLeft?;
    width?;
}

import { Observable,Subscription } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector: 'hero',
    styleUrls: ['./hero.component.less'],
    templateUrl: './hero.component.html'
})
export class HeroComponent {



    //跳转路由
    gotoUrl = () => {
        console.log('exec')
        this.router.navigate(['../list'], { relativeTo: this.route });
    };

    @ViewChild('container')
    container: ElementRef;
    @ViewChild('tizhong')
    tizhong: ElementRef;

    constructor(private router: Router, private route: ActivatedRoute) {

    }
    ngOnInit (){
        let men = Observable.create(function (observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
        }).subscribe((next) => console.log(next) ,(err) => console.log(err), complete => console.log('完成'));




        /*Observable.zip(men,women,(w:any, h:any)=>{
            return [w,h]
        }).take(3).subscribe(value => console.log(value))*/
    }


}
