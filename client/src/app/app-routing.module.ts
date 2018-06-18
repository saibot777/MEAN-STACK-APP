import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";

// import { WelcomeComponent } from './welcome/welcome.component';
// import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // providers: [AuthGuard]
})
export class AppRoutingModule {}
