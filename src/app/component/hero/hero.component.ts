import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'hero',
    styleUrls: ['./hero.component.less'],
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    title = `<a href="javascript:void(0)">点击我</a>`;
    isShow: boolean = false;



    heroList: Array<Object> = [{
        id: 1,
        name: '侯亮平'
    }, {
        id: 2,
        name: '李达康'
    }, {
        id: 3,
        name: '祈同伟'
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
        this.router.navigate(['../list'], { relativeTo: this.route });
    };

    myStyle: any = {
        marginLeft: 0
    };
    bannerList: Array<Object> = [
        {
            src: '../assets/images/1.jpg'
        },
        {
            src: '../assets/images/2.jpg'
        },
        {
            src: '../assets/images/3.jpg'
        },
        {
            src: '../assets/images/4.jpg'
        }
    ]
    ngAfterViewInit() {
        console.log(this)
        let containWidth = document.getElementById('slide_contain').offsetWidth,
            current = 0,
            self = this, move = () => {
                current++;
                if (current < self.bannerList.length) {
                    self.myStyle.marginLeft = -containWidth * current + 'px';
                }
                else {
                    self.myStyle.marginLeft = 0;
                    current = 0;
                }
                setTimeout(move, 4000);
            };        
        self.myStyle.width = self.bannerList.length * 100 + '%';
        setTimeout(move, 4000)
    }
}
