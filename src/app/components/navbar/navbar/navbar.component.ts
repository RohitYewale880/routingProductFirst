import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FairsService } from 'src/app/services/fairs.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private router: Router,
    private userService: UserService,
    private productService: ProductService,
    private fairsservice : FairsService
  ) { }
  
  ngOnInit(): void {
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

  goToProduct(){
    this.productService.getProducts().subscribe(pro => {
      if(pro.length){
        this.router.navigate(['/product', pro[0].pid], {
          queryParams : {
            cr : pro[0].canReturn
          }
        })
      }
    })
  }

  goToFairs(){
    this.fairsservice.getfairsArr().subscribe(fairs => {
      if(fairs.length){
        this.router.navigate(['/fairs', fairs[0].fairId])
      }
    })
  }
}
