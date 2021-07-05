import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //接收父组件传来的数据
  @Input() title:any;
  @Input() msg:any;

  @Input() run:any;

  //传递整个父组件给子组件
  @Input() home:any;

  constructor() { }

  ngOnInit(): void {
  }

  getParentMsg() {
    //获取父组件的数据
    alert(this.msg);
  }

  getParentRun() {
    this.run();

    alert(this.home.msg);
    this.home.run();
  }

}
