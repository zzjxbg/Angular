/*
 1. ng g service services/storage

 2. app.module.ts 里面引入创建的服务 并且声明

    import { StorageService } from './services/storage.service';

    providers: [StorageService],

 3. 在用到的组件里面
        //引入服务
        import { StorageService } from '../../services/storage.service';

        //初始化
        constructor(public storage:StorageService) { 
            let s=this.storage.get();
            console.log(s);
        }

*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**封装缓存方法 */

  set(key:string,value:any) {
    localStorage.setItem(key,JSON.stringify(value));
  }

  get(key:string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }
  
  remove(key:string) {
    localStorage.removeItem(key);
  }
}
