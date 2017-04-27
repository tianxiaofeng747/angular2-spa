import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app works! new data my app';
  badCurly = 'addClass';
  list: Array<Object> = [{
    name: 'xiao',
    id: 1
  }, {
    name: 'zhao',
    id: 2
  }];
  add = function(){
    this.list.push({
      id : 3,
      name : 'add 0' 
    })
  }
  //子组件触发事件调用父函数
  deleteHero = function(){
    console.log(arguments);
  }
}
