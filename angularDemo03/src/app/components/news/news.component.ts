import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  /*

   声明属性的几种方式：

        public     共有   *(默认)  
   
        protected  保护类型      只有在类和它的子类里可以访问

        private    私有          只有在当前类可以访问

   */

  //定义普通数据      
  public title="我是新闻组件";

  msg="我是一个新闻组件的msg";

  username:string="张三";

  //推荐
  public student:string="我是一个学生的属性(数据)";

  public userinfo:any={

    username:"李四",
    age:"20"
  }

  public message:any;

  public content="<h2>我是一个html标签<h2/>";

  //定义数组
  public arr=['111','2222','33333'];

  //推荐
  public list:any=["我是第一个新闻","2222222","我是第三个新闻"];

  public items:Array<any>=["我是第一个新闻","2222222","我是第三个新闻"];

  public userlist:any[]=[{
    
    username:"张三",
    age:20
  },{

    username:"李四",
    age:21
  },{

    username:"王五",
    age:40
  }];

  public cars:any[]=[
    {
      brand:"宝马",
      list:[{

        title:"宝马x1",
        price:"30万"
      },{

        title:"宝马x2",
        price:"30万"
      },{

        title:"宝马x3",
        price:"40万"
      }
    ]
    },
    {
      brand:"奥迪",
      list:[{

        title:"奥迪q1",
        price:"40万"
      },{

        title:"奥迪q2",
        price:"40万"
      },{

        title:"奥迪q3",
        price:"30万"
      }
    ]
    },
  ]

  constructor() { 

    this.message="这是给属性赋值--(改变属性的值)";

    //获取属性的值
    console.log(this.msg);

    //改变属性的值
    this.msg="我是改变后的msg的值";

  }

  ngOnInit(): void {
  }

}
