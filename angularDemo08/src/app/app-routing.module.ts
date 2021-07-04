//配置路由的模块
//路由就是根据不同的url地址,动态的让根组件挂载其他组件,来实现一个单页面应用
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'news',component:NewsComponent
  },
  {
    path:'newscontent/:aid',component:NewscontentComponent
  },
  {
    path:'product',component:ProductComponent
  },
  {
    path:'productcontent/:pid',component:ProductcontentComponent
  },
  

  //匹配不到路由的时候加载的组件 或者跳转的路由(设置默认路由)
  {
    path:'**',redirectTo:'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
