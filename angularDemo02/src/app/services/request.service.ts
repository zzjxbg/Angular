import { Injectable } from '@angular/core';

//引入Observable用于rxjs异步编程
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  //同步
  getData() {
    return "this is service data";
  }

  getCallbackData(cb:any) {

    setTimeout(() => {

    var username="张三";
    //return username
    cb(username);
    
    },1000);
  }

  getPromiseData() {

      return new Promise((resolve)=>{
        
        setTimeout(() => {
          var username="张三--Promise";
          resolve(username);
        
        },3000);
      })
  }

  getRxjsData() {
    return new Observable((observer)=>{
      setTimeout(()=>{
        var username="张三--Rxjs";
        observer.next(username);
        //observer.error("失败");
      },3000);
    })
  }

  getRxjsIntervalData() {
    let count = 0;
    return new Observable((observer)=>{
      setInterval(()=>{
        count++;
        var username="张三--Rxjs-Interval"+count;
        observer.next(username);
        //observer.error("失败");
      },1000);
    })
  }

  getRxjsIntervalNum() {
    let count = 0;
    return new Observable<any>((observer)=>{
      setInterval(()=>{
        count++;
        observer.next(count);
      },1000);
    })
  }

}
