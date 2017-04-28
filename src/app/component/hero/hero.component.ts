import {Component, Input, EventEmitter, Output} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    title = '我是子组件';
    isShow: boolean = false;
    @Input() list: Array<Object>;
    //自定义事件 可以使用别名
    @Output() deleteRequest = new EventEmitter<Object>();
    delete = function (obj, id) {
        this.deleteRequest.emit(obj, id);
    }
    show = function () {
        this.isShow = !this.isShow;
    };

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    //跳转路由
    gotoUrl = () => {
        this.router.navigate(['../hero/detail', 15], {relativeTo: this.route});
    }
}
