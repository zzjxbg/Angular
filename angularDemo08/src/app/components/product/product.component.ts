/*
  js跳转路由

    1.动态路由

      1.引入声明模块
      import {Router} from '@angular/router';
      constructor(public router:Router) { }

      2.跳转
      this.router.navigate(['/home']);
      this.router.navigate(['/newscontent/','1234']);

    
    2.get传值
    
      1.引入声明模块
         import {Router} from '@angular/router';
         constructor(public router:Router,NavigationExtras) { }

      2.跳转
         this.router.navigate(['/news'],{
           queryParams:{
             aid:123
           }
         });

*/

import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goNewsContent() {
    
    //js动态路由跳转 普通路由和动态路由
    this.router.navigate(['/newscontent/','1234']);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goNews() {
    
    //跳转并进行get传值
    let queryParams:NavigationExtras={
      queryParams:{'aid':123}
    }
    this.router.navigate(['/news'],queryParams);
  }

}
