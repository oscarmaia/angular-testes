import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../login/auth.service';

export const authGuard = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const auth = inject(AuthService);
  if (auth.userIsAuthenticated()) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
