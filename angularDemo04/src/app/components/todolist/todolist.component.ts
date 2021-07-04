import { Component, OnInit } from '@angular/core';

//引入服务
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  public keyword:string='';

  public todolist:any[]=[];

  constructor(public storage:StorageService) { 
  }

  ngOnInit(): void {
    console.log("页面刷新会触发这个生命周期函数");
    var todolist:any=this.storage.get("todolist");  //得到需要缓存的数据(数组)
    if(todolist) {            //缓存数据不为空
      this.todolist=todolist;  //缓存数据赋给存值数组实现数据持久化
    }
  }

  doAdd(e:any) {

      if(e.keyCode==13) {
        if(!this.todolistHasKeyword(this.todolist,this.keyword)) {
        this.todolist.push({
          title:this.keyword,
          status:0            //0表示代办事项  1表示已完成事项 
        });

        this.storage.set("todolist",this.todolist);    //用到this一定要注意this指向
        this.keyword='';
      } else {
        alert("数据已经存在");
        this.keyword='';
      }
    }

  }

  deleteData(key:any) {
    this.todolist.splice(key,1);
    this.storage.set("todolist",this.todolist); 
  }

  todolistHasKeyword(todolist:any,keyword:any) {
    if(!keyword) return false;
    for(var i=0;i<todolist.length;i++) {
      if(todolist[i].title==keyword){
        return true;
      }
    }
    return false;
  }

  checkboxChange() {
    console.log("事件触发了");
    this.storage.set("todolist",this.todolist); 
  }
}
