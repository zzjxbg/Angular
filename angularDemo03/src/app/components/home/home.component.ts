import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title="我是一个title";

  public picUrl="https://www.baidu.com/img/540x258_2179d1243e6c5320a8dcbecd834a025d.png";

  public list:any[]=[
    {
      title:'我是新闻1'
  },{
      title:'我是新闻2'
  },{
      title:'我是新闻3'
  }];

  public flag:boolean=true;

  public orederStatus:number=1;    /* 1表示已经支付 2支付并且确认订单 3表示已经发货 4表示已经收货 其他无效 */

  public attr:string="red";

  public today:any=new Date();

  public keywords:string="这是默认值";

  constructor() { 

    console.log(this.today)
  }

  ngOnInit(): void {
  }

  run() {
    alert("这是一个自定义方法");
  }

  getData() {
    alert(this.title);
  }

  setData() {
    this.title="这是一个改变后的title";
  }

  runEvent(event) {

    var dom:any=event.target;
    dom.style.color="red";
  }

  keyDown(e) {

    if(e.keyCode == 13) {
      console.log("按了一下回车");
    } else { //e.target获取当前对象
      console.log(e.target.value);
    }
  }

  keyUp(e) {

    if(e.keyCode == 13) {
      console.log("按了一下回车");
      console.log(e.target.value);
    }
  }

  changeKeywords() {
    this.keywords="我是改变后的值";
  }

  getKeywords() {
    console.log(this.keywords);
  }
}
