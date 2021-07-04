import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any={

    username:'',
    sex:"1",
    cityList:['北京','上海','深圳'],
    city:"北京",
    hobby:[{
      title:"吃饭",
      checked:false
    },{
      title:"睡觉",
      checked:false
    },{
      title:"敲代码",
      checked:true
    }],

    mark:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit() {

    //jquery dom操作
    // let usernameDom:any=document.getElementById("username");
    // console.log(usernameDom.value);

    //双向数据绑定
    console.log(this.peopleInfo);
  }

}
