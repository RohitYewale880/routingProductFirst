import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home/home.component';
import { ProductComponent } from './components/Product/product/product.component';
import { UsersComponent } from './components/User/users/users.component';
import { FairsComponent } from './components/Fairs/fairs/fairs.component';
import { SinglaproductComponent } from './components/Product/singlaproduct/singlaproduct.component';
import { ProductformComponent } from './components/Product/productform/productform.component';
import { SingleuserComponent } from './components/User/users/singleuser/singleuser.component';
import { UserformComponent } from './components/User/users/userform/userform.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'home',
    component : HomeComponent
  },
  {
    path: 'product',
    component : ProductComponent
  },
  {
    path: 'users',
    component : UsersComponent
  },
  {
    path: 'fairs',
    component : FairsComponent
  },
  {
    path: 'product/adduser',
    component : ProductformComponent
  },
  {
    path: 'product/:id',
    component : SinglaproductComponent
  },
  {
    path: 'product/:id/edit',
    component : ProductformComponent
  },
  {
    path : 'users/userAdd',
    component : UserformComponent
  },
  {
    path : 'users/:id',
    component : SingleuserComponent
  },
  {
    path : 'users/:id/edit',
    component : UserformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }