import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';
import { User } from '../../users/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  currentUser: User | undefined = undefined;
  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(   () => 
         {
          this.isLoggedIn = true
          this.currentUser = {
            id: 1,
            email: 'salva@gmail.com',
            avatar: 'https://reqres.in/img/faces/1-image.jpg',
            roles: ['admin']
        }})
    )
  }

  logout() {
    this.isLoggedIn = false;
    this.currentUser = undefined;
  }

}
