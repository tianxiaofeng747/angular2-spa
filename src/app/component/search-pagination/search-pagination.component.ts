import {Component, OnInit, Input} from '@angular/core';
import {Api} from '../../service/api';
@Component({
    selector: 'app-search-pagination',
    templateUrl: './search-pagination.component.html',
    styleUrls: ['./search-pagination.component.less'],
    providers: [
        Api
    ]
})
export class SearchPaginationComponent implements OnInit {

    constructor(private $api: Api) {
    }

    @Input() option: any;

    list:Array<Object> = [];

    isVisbled:Boolean = false;

    searchData = (options:any = {}) => {
        var self = this,
            options = Object.assign(self.option, options);
        this.$api.post({
            url: options.url,
            params: options.params
        }).then((result) =>{
            //console.log(result);
            self.list = result.rows;
        })

    };
    ngOnInit() {
        this.searchData();
    }
    showChecked(item){

    }
    toggle(){
        this.isVisbled = !this.isVisbled;
        console.log(this.isVisbled)
    }
}
