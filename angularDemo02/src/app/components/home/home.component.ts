import { Component, OnInit } from '@angular/core';

import { RequestService } from '../../services/request.service';

import { map,filter } from 'rxjs/operators';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) {};

  ngOnInit(): void {

      //1.同步方法
      let data=this.request.getData();
      console.log(data);

      //2.callback获取异步数据
      this.request.getCallbackData((data:any)=>{
        console.log(data);
      })

      //3.promise获取异步数据
      var promiseData=this.request.getPromiseData(); //返回promise对象
      promiseData.then((data)=>{
        console.log(data);
      })

      //4.rxjs获取异步方法里面的数据
      var rxjsData=this.request.getRxjsData();  //返回Observable对象
      rxjsData.subscribe((data)=>{
        console.log(data);
      })

      //5. 过一秒以后撤回刚才的操作
      var stream=this.request.getRxjsData();
      var d=stream.subscribe((data)=>{
        console.log(data); 
      }) 

      setTimeout(()=>{
        d.unsubscribe(); //取消订阅
      },1000)

     //6. rxjs执行多次
     var streamInterval=this.request.getRxjsIntervalData();
     streamInterval.subscribe((data)=>{
        console.log(data); 
      }) 

    //7. 用工具方法对返回的数据进行处理

    //filter
    var streamNum=this.request.getRxjsIntervalNum();

    streamNum.pipe(
      filter(value=>value%2==0)
    ).subscribe((data)=>{
      console.log(data);
    })

    var streamNum=this.request.getRxjsIntervalNum();

    //map
    streamNum.pipe(
      map((value)=>{
        return value * value;
      })
    ).subscribe((data)=>{
      console.log(data);
    })
    
  }
}
