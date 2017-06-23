import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener} from '@angular/core';
import {Api} from '../../service/api';

interface Pagination {
    total?: number;
    pageIndex?: number;
    pageSize?: number;
    pageTotal?: number;
}

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
    @Input() value: String;
    @Output() valueChange = new EventEmitter<String>();
    @ViewChild('ele')
    child: ElementRef;

    @HostListener('document:click', ['$event'])
    onClick() {
        if (!this.child.nativeElement.contains(event.target)) {
            this.toggle(true);
        }
    }

    list: Array<Object> = [];
    isVisbled: Boolean = false;
    checkedEle: Object; //选中元素
    pager: Pagination = {
        pageIndex: 1,
        pageSize: 10
    };

    changePage(orientation: String): void {
        if (this.pager.pageIndex != 1 || this.pager.pageIndex != this.pager.pageTotal) {
            if (orientation == 'prev') {
                this.pager.pageIndex--;
            } else {
                this.pager.pageIndex++;
            }
            this.searchData();
        }
    };

    searchData = () => {
        var self = this,
            options = self.option;
        this.$api.post({
            url: options.url,
            params: {
                keywords: options.keywords,
                pageIndex: self.pager.pageIndex,
                pageSize: self.pager.pageSize,
            }
        }).then((result) => {
            self.list = result.rows;
            Object.assign(self.pager, result, {rows: null});
            self.pager.pageTotal = Math.ceil(self.pager.total / (self.pager.pageIndex * self.pager.pageSize));
        })
    };

    ngOnInit() {
        this.searchData();
    }

    //显示选中
    showChecked(item) {
        let delHtmlTag = (str) => {
            return str.replace(/<[^>]+>/g, "");//去掉所有的html标记
        };
        this.toggle();
        this.checkedEle = delHtmlTag(this.getEleName(item));
        this.valueChange.emit(item[this.option.value]);
    }

    //展示隐藏下拉
    toggle(hide: Boolean = false): void {
        if (hide) {
            this.isVisbled = false;
        } else {
            this.isVisbled = !this.isVisbled;
        }
    }

    //得到显示的名称
    getEleName(item): Object {
        let self = this,
            name;
        if (typeof self.option.name == 'string') {
            name = item[self.option.name] || '';
        }
        else if (self.option.name instanceof Array) {
            name = [];
            self.option.name.forEach(function (key) {
                name.push(item[key] || '');
            });
            name = name.join(' | ');
        }
        else if (typeof self.option.name == 'function') {
            name = self.option.name(item);
        }
        return name;
    }
}
