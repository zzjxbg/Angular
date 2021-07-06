import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularDemo07';

  public flag:boolean=true;

  changeTitle() {
    this.title="改变后的title";
  }

  changeFlag() {
    this.flag=!this.flag;
  }
}
