import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Login} from "../store/auth.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/index";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  isLoading = false;

  constructor(private store: Store<AppState>, private router: Router, private authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.isLoading = true;

    this.authService.login(form.value.email, form.value.password)
      .pipe(
        tap(user => {

          this.store.dispatch(new Login({user}));

          this.router.navigateByUrl('/');

        })
      )
      .subscribe(
        noop,
        err => console.log('Login Failed', err)
      );

  }
}
