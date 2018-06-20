import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import {AppState} from "../../store";
import {Store} from "@ngrx/store";
import {Register} from "../store/auth.actions";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {
  isLoading = false;

  constructor(private store: Store<AppState>, private router: Router, private authService: AuthService) {}

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(form.value);

    this.isLoading = true;

    this.authService.signUp(form.value.name, form.value.email, form.value.password, form.value.password2)
      .pipe(
        tap(user => {

          this.store.dispatch(new Register({user}));

          this.router.navigateByUrl('/login');

        })
      )
      .subscribe(
        noop,
        err => console.log('Register Failed', err)
      );

  }
}
