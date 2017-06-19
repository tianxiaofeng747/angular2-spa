import { Component,ElementRef, ViewChild,  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
interface Style {
    marginLeft?;
    width?;
}
@Component({
    selector: 'hero',
    styleUrls: ['./hero.component.less'],
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    title = `<a href="javascript:void(0)">点击我</a>`;
    isShow: boolean = false;
   
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

    myStyle:Style={

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
    ];
    @ViewChild('container')
    container: ElementRef;

    timer;
    ngAfterViewInit() {
        let containWidth = this.container.nativeElement.offsetWidth,
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
                self.timer = setTimeout(move, 4000);
            };        
        self.myStyle.width = self.bannerList.length * 100 + '%';
        self.timer = setTimeout(move, 4000)
    }
    stop(){
        clearTimeout(this.timer);
        this.timer = null;
    }
    start(){
        !this.timer && this.ngAfterViewInit();
    }
}
