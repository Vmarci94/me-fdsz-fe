import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user.dto';
import {environment} from '../../environments/environment';

const TOKEN_NAME = 'token_name';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userUrl = '/users';

  constructor(private http: HttpClient) {

  }

  callLoginValidation(pUser: User): Observable<Response> {
    const url = environment.connectionURL + this.userUrl + '/login';
    return this.http.post<Response>(url, pUser, {headers: environment.header});
  }

  callRegister(pUser: User): Observable<Response> {
    const url = environment.connectionURL + this.userUrl + '/sign-in';
    return this.http.post<Response>(url, pUser, {headers: environment.header});
  }

  getDefaultToken(): Observable<string> {
    const url = environment.connectionURL + this.userUrl + '/get-token';
    return this.http.get<string>(url);
  }

  setToken() {
    // localStorage.setItem(TOKEN_NAME, );
  }
}


