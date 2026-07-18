import { inject, Injectable } from '@angular/core';
import { Iproduct } from '../modals/product';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Iproduct[]>{

  productservice = inject(ProductService)
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iproduct[] | Observable<Iproduct[]> | Promise<Iproduct[]> {
    return this.productservice.getProducts()
  }
  
}
