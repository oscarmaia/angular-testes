import { Injectable, inject } from '@angular/core';
import { User } from './types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  router = inject(Router);
  public signIn(form: User) {
    const username = 'oscarfgmaia';
    const password = 'oscar984';
    if (username === form.username && password === form.password) {
      this.isAuthenticated = true;
      this.router.navigate(['/']);
    } else {
      console.log('login failed');
      this.isAuthenticated = false;
    }
  }

  public userIsAuthenticated() {
    return this.isAuthenticated;
  }
}
