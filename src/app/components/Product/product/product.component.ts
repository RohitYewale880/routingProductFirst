import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/modals/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productdata !:Array<Iproduct>
  constructor(
    private productService:ProductService,
    private routes: ActivatedRoute,
    private router : Router
  ) { 
    this.productdata = this.routes.snapshot.data['product']
  }

  ngOnInit(): void {
    // this.getchdata()
  }

  // getchdata(){
  //   this.productService.getProducts()
  //     .subscribe(res => {
  //       this.productdata = res

  //       if(this.productdata.length > 0 && this.router.url === '/product') {
  //         this.router.navigate(
  //           [this.productdata[0].pid],
  //           {
  //             relativeTo: this.routes
  //           }
  //         );
  //       }
  //     })
  // }

  trackbyfun(index:number,product:Iproduct){
    return product.pid
  }
}
