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

  ngOnInit() {
      this.getList();
  }
  getList () {
      let self = this;
      this.$api.post({
          url: 'assets/data/base.data.open.brandAPI.findPage.json',
          param:{
              id: 2,
              name:'22'
          }
      }).then(function (result){
          self.list = self.list.concat(result.rows);
      });
  }

}
