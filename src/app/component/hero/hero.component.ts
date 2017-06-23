import {Component, ElementRef, Input, ViewChild,} from '@angular/core';
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

    //跳转路由
    gotoUrl = () => {
        console.log('exec')
        this.router.navigate(['../list'], { relativeTo: this.route });
    };

    @ViewChild('container')
    container: ElementRef;
    list:Array<Object> = [
        {
            name: '北京',
            id:1,
            children: [
                {
                    name: '朝阳区',
                    id:1.1,
                    children: [
                        {
                            name: '三里屯',
                            id:'1.1.1'
                        }
                    ]
                },
                {
                    name: '石景山区',
                    id:1.2,
                },
                {
                    name: '大兴区',
                    id:1.3,
                }
            ]
        },
        {
            name: '河北',
            id:2 ,
            children:[
                {
                    name: '沧州',
                    id:2.1,
                },
                {
                    name: '石家庄',
                    id:2.2,
                }
            ]
        }
    ];
    myForm:any = {
        value:''
    };
    constructor(private router: Router, private route: ActivatedRoute) {

    }
    getChecked(){
        console.log(this.list);
    }

    options:any = {
        url: 'scm.productAuthorize.queryBasicRegistList',
        name: function (item) {
            var isAuth = '';
            switch (item.isAuth) {
                case 0:
                    isAuth = '<span class="text-danger">未认证</span>';
                    break;
                case 1:
                    isAuth = '<span class="text-success">已认证</span>';
                    break;
                case 2:
                    isAuth = '<span class="text-info">认证中</span>';
                    break;
            }
            return item.productName + '(' + item.certIssuedNo + ')' + isAuth;
        },
        value : 'certIssuedNo',
        keywords:'123'
    };
    getValue(){
        alert(this.myForm.value)
    }
    ngOnInit (){
        /*let men = Observable.create(function (observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(() => {
                observer.next(4);
                observer.complete();
            }, 1000);
        }).subscribe((next) => console.log(next) ,(err) => console.log(err), complete => console.log('完成'));*/


       
        /*Observable.zip(men,women,(w:any, h:any)=>{
            return [w,h]
        }).take(3).subscribe(value => console.log(value))*/
    }


}
