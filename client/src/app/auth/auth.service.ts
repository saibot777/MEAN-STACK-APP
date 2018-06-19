import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.model";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/v1/users/login', {email, password});
  }

  register(name: string, email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/v1/users/register', {name, email, password});
  }

}
