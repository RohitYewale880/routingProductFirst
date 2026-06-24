import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/modals/product';
import { ProductService } from 'src/app/services/product.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';
import { SnakbarService } from 'src/app/services/snakbar.service';

@Component({
  selector: 'app-singlaproduct',
  templateUrl: './singlaproduct.component.html',
  styleUrls: ['./singlaproduct.component.scss'],
})
export class SinglaproductComponent implements OnInit {

  productId !:string;
  product !: Iproduct;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private productService: ProductService,
    private _matdilog : MatDialog,
    private _snakbar :SnakbarService
  ) { }

  ngOnInit(): void {
    this.getsingleproduct()
  }

  getsingleproduct(){
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductById(this.productId)
      .subscribe({
        next : (res => {
          this.product = res!
        }),
        error : err => {
          console.log(err);
        }
      })
  }

  onRemove(){
    this._matdilog.open(GetconfirmComponent, {
      width : '500px',
      disableClose : true,
      data : `Are you sure do you want to remove this product whose id is ${this.product.pid}`
    }).afterClosed().subscribe(res => {
      if(res){
        this.productService.Removeproduct(this.product.pid)
          .subscribe({
            next : res => {
              this.router.navigate(['product'])
              this._snakbar.OpenSnakbar(res.msg)
            },
            error : err => {
              console.log(err);
            }
          })
      }
    })
  }

  onEdit(){
    this.router.navigate(['/product', this.productId, 'edit'],{
      queryParamsHandling : 'preserve',
      relativeTo : this.route
    })
  }
}
