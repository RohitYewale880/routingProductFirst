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
import { SinglefairsComponent } from './components/Fairs/singlefairs/singlefairs.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGardService } from './services/auth-gard.service';
import { UserRoleGardService } from './services/user-role-gard.service';
import { CanDeactivateService } from './services/can-deactivate.service';
import { ProductResolverService } from './services/product-resolver.service';
import { UserResolverService } from './services/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [AuthGardService, UserRoleGardService],
    data : {
      userRole : ['buyer', 'admin', 'superAdmin']
    }
  },
  {
    path: 'product',
    component: ProductComponent,
    resolve : {
      product : ProductResolverService
    },
    canActivate: [AuthGardService, UserRoleGardService],
    data : {
      userRole : ['buyer', 'admin', 'superAdmin']
    },
    children: [
      {
        path: 'adduser',
        component: ProductformComponent
      },
      {
        path: ':id',
        component: SinglaproductComponent
      },
      {
        path: ':id/edit',
        component: ProductformComponent,
        canDeactivate: [CanDeactivateService]
      }
    ]
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve : {
      users : UserResolverService
    },
    canActivate: [AuthGardService, UserRoleGardService],
    data : {
      userRole : ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'userAdd',
        component: UserformComponent
      },
      {
        path: ':id',
        component: SingleuserComponent
      },
      {
        path: ':id/edit',
        component: UserformComponent,
        canDeactivate: [CanDeactivateService]
      }
    ]
  },
  {
    path: 'fairs',
    component: FairsComponent,
    canActivate: [AuthGardService, UserRoleGardService],
    data : {
      userRole : ['superAdmin']
    },
    children : [
      {
        path : ':fairId',
        component : SinglefairsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }