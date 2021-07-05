import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output() private outer=new EventEmitter();

  public msg:string="我是子组件的一个msg";

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    alert("我是子组件的run方法");
  }

  sendParent() {
    //向父组件广播数据
    this.outer.emit("我是子组件的数据");
  }
}
