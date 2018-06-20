import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


const BASE_URL = 'http://localhost:3000/api/v1';


@Injectable()
export class AuthService  {

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('frenzytoken');
  }

  login(email: string, password: string): Observable<any> {
    const url = `${BASE_URL}/users/login`;
    return this.http.post<any>(url, {email, password});
  }

  signUp(name: any, email: any, password: any, password2: any): Observable<any> {
    const url = `${BASE_URL}/users/register`;
    console.log(url);
    return this.http.post<any>(url, {name, email, password, password2});
  }

  // signUp(name: any, email: any, password: any): Observable<User> {
  //   const url = `${this.BASE_URL}/users/register`;
  //   return this.http.post<User>(url, {name, email, password});
  // }

}
