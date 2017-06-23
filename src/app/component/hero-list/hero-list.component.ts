import { Component, OnInit } from '@angular/core';
import {Api} from '../../service/api';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.less'],
    providers:[
        Api
    ]
})
export class HeroListComponent implements OnInit {

  constructor(private $api:Api) {
  }
  list:Array<Object> = [];
  detail:Object = {

  };

  //实验async的异步调用
  ngOnInit() {
      //this.getList();
      let self = this;
      this.getAll().then((result) =>{
          this.list = this.list.concat(result[0].rows);
          this.detail = result[1];

      });
  }
  getList () {
      return this.$api.post({
          url: 'base.data.open.brandAPI.findPage',
          param:{
              id: 2,
              name:'22'
          }
       })
  }
  getList2 (){
      return this.$api.post({
          url:'erp.inner.inWarehouseBill.findItemById'
      });
  }
  async getAll (){
      var list = await this.getList();
      var list2 =  await this.getList2();
      return [list,list2]
  }

}
