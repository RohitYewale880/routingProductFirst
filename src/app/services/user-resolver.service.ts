import { inject, Injectable } from '@angular/core';
import { Iuser } from '../modals/product';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Iuser[]> {

  userservice = inject(UserService)
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Iuser[] | Observable<Iuser[]> | Promise<Iuser[]> {
    return this.userservice.getusers()
  }
}
