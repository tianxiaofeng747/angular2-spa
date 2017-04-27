import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Api} from "../../service/api";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {


    constructor(private route: ActivatedRoute,private $api : Api) {
    }

    ngOnInit() {
        this.getDetail();
    }

    urlId: Number = this.route.snapshot.params['id'];
    detail = new Object();

    getDetail (){
        this.$api.post({
            url:'erp.inner.DeliveryBillAPI.findById',
            id : this.urlId
        }).then((data) => {
            this.detail = data;
        });
    }

}
