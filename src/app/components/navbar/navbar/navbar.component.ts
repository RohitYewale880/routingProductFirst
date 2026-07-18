import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';
import { FairsService } from 'src/app/services/fairs.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeMenu: string = '';
  userRole!: string ;

  constructor(
    private router: Router,
    private userService: UserService,
    private productService: ProductService,
    private fairsservice: FairsService,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {

    this.setActiveMenu(this.router.url);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.setActiveMenu(event.urlAfterRedirects);
      });

      this.authservice.userroleObservable$.subscribe(role => {
        this.userRole = role;
      });
  }

  haveToken(){
    let token = this.authservice.getToken()
    if(token){
      return true
    }
    else{
      return false
    }
  }

  setActiveMenu(url: string) {

    if (url.startsWith('/home')) {
      this.activeMenu = 'home';
    }
    else if (url.startsWith('/users')) {
      this.activeMenu = 'users';
    }
    else if (url.startsWith('/product')) {
      this.activeMenu = 'products';
    }
    else if (url.startsWith('/fairs')) {
      this.activeMenu = 'fairs';
    }
    else {
      this.activeMenu = '';
    }

  }

  goToUsers() {

    this.userService.getusers().subscribe(users => {

      if (users.length) {

        this.router.navigate(['/users', users[0].userId], {
          queryParams: {
            userRole: users[0].userRole
          }
        });

      }

    });

  }

  goToProduct() {

    this.productService.getProducts().subscribe(pro => {

      if (pro.length) {

        this.router.navigate(['/product', pro[0].pid], {
          queryParams: {
            cr: pro[0].canReturn
          }
        });

      }

    });

  }

  goToFairs() {

    this.fairsservice.getfairsArr().subscribe(fairs => {

      if (fairs.length) {

        this.router.navigate(['/fairs', fairs[0].fairId]);

      }

    });

  }

  onLogOut() {

    this.authservice.LogOut();
    this.router.navigate(['']);

  }

}