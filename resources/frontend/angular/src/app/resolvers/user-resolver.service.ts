import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any>{

  constructor(private userService: UserServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      return this.userService.getUserById(localStorage.getItem('id') ?? '');
  }
}
