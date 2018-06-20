import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionTypes, Login, Logout, Register} from './auth.actions';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem("frenzytoken", action.payload.user.token))
  );

  @Effect({dispatch: false})
  signup$ = this.actions$.pipe(
    ofType<Register>(AuthActionTypes.RegisterAction),
    tap(() => this.router.navigateByUrl('/login'))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() => {

      localStorage.removeItem("frenzytoken");
      this.router.navigateByUrl('/login');

    })
  );

  // @Effect({ dispatch: false })
  // LogInSuccess: Observable<any> = this.actions$.pipe(
  //   ofType(AuthActionTypes.LoginSuccess),
  //   tap((user) => {
  //     localStorage.setItem('frenzytoken', user.payload.token);
  //     this.router.navigateByUrl('/');
  //   })
  // );
  //
  // @Effect({ dispatch: false })
  // RegisterSuccess: Observable<any> = this.actions$.pipe(
  //   ofType(AuthActionTypes.RegisterSuccess),
  //   tap(() => this.router.navigateByUrl('/login'))
  // );

  constructor(private actions$: Actions, private router: Router) {}

}
