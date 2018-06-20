import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import { StoreModule } from '@ngrx/store';
import {AuthService} from "./auth.service";
import * as fromAuth from './store/auth.reducer';
import {AuthGuard} from './auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import {SignupComponent} from "./signup/signup.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent}
    ]),
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),

  ],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, SignupComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    };
  }
}
