import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    title = `<a href="javascript:void(0)">点击我</a>`;
    isShow: boolean = false;



    heroList:Array<Object> = [{
        id:1,
        name:'侯亮平'
    },{
        id:2,
        name:'李达康'
    },{
        id:3,
        name:'祈同伟'
    }];
    delete = function (obj) {
        let id = obj.id;
        this.heroList = this.heroList.filter(function (item) {
            return item.id != id;
        });
    };
    show = function () {
        this.isShow = !this.isShow;
    };

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    //跳转路由
    gotoUrl = () => {
        console.log('exec')
        this.router.navigate(['../list'], {relativeTo: this.route});
    }
}
