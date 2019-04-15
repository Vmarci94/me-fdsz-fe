import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static readonly usersServiceUrl: string = '/users';

  constructor(private http: HttpClient) {
  }

  callSignin(pUser: User): Observable<any> {
    const url =  environment.connectionURL + UserService.usersServiceUrl + '/signin';
    return this.http.post(url, pUser, {headers: environment.header, observe: 'response'});
  }

  callSignup(pUser: User): Observable<any> {
    const url =  environment.connectionURL + UserService.usersServiceUrl + '/signup';
    return this.http.post(url, pUser, {headers: environment.header, observe: 'response'});
  }

}
