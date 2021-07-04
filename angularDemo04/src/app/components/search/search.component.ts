import { Component, OnInit } from '@angular/core';

//引入服务
import { StorageService } from '../../services/storage.service';

//不推荐
// var storage=new StorageService();
//   console.log(storage);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyword:string='';

  public historyList:any[]=[];

  constructor(public storage:StorageService) { }

  ngOnInit(): void {
      console.log("页面刷新会触发这个生命周期函数");
      var searchlist:any=this.storage.get("searchlist");    //得到需要缓存的数据(数组)
      if(searchlist) {      //缓存数据不为空
        this.historyList=searchlist;    //缓存数据赋给存值数组实现数据持久化
      }
  }

  doSearch() {
    if (this.historyList.indexOf(this.keyword) == -1) {
      this.historyList.push(this.keyword);

      this.storage.set("searchlist",this.historyList);
    }
    this.keyword='';
    console.log(this.keyword);
  }

  deleteHistory(key:any) {
    alert(key);
    this.historyList.splice(key,1);
    this.storage.set("searchlist",this.historyList);
  }

}
