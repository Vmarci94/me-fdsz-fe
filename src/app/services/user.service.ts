import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';
import 'rxjs-compat/add/operator/map';
import {Token} from '../model/token';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly usersServiceUrl: string = '/users';

  constructor(private http: HttpClient) {
  }

  public callSignin(pUser: User): Observable<Token> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signin';
    return this.http.post<Token>(url, pUser, {headers: environment.header});
  }

  public callSignup(pUser: User): Observable<any> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signup';
    return this.http.post(url, pUser, {headers: environment.header, observe: 'response'});
  }

  public callPreAuthToken(): Observable<Token> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/pre-auth-token';
    return this.http.get<Token>(url);
  }

}
