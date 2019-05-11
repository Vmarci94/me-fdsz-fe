import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user';
import 'rxjs-compat/add/operator/map';
import {Token} from '../model/token';
import {SigninComponent} from '../shared/module/modals/signin/signin.component';
import {SignupComponent} from '../shared/module/modals/signup/signup.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {LocalStorageService} from './local-storage.service';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly usersServiceUrl: string = '/users';

  @Output() public userName: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient,
              private modalService: NgbModal,
              private localStorageService: LocalStorageService,
              private router: Router,
              private authService: AuthService) {
  }

  public callGetCurrentUser(): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-currnet-user';
    return this.http.get<User>(url);
  }

  public openSigninModal() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.result.then(user => this.callSignin(user));
    // modalRef.componentInstance.callBack.subscribe(user => this.signin(user));
  }

  public openSignupModal() {
    const modalRef = this.modalService.open(SignupComponent);
    modalRef.result.then(user => this.callSignup(user));
  }

  public signout() {
    this.authService.emitLoggedStatus();
    this.localStorageService.deleteToken();
  }

  public updateUserData(user: User): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/update-user-data';
    return this.http.post<User>(url, user);
  }

  public getAllClientUser(): Observable<User> {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/get-all-client-user';
    return this.http.get<User>(url);
  }

  // bejelentkezés
  private callSignin(pUser: User) {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signin';
    this.http.post<Token>(url, pUser, {headers: environment.header}).subscribe(tokenDTO => {
      this.localStorageService.updateToken(tokenDTO.token);
      this.authService.emitLoggedStatus();
      this.router.navigate(['feeds']);
    });
  }

  // regisztráció
  private callSignup(pUser: User) {
    const url = environment.connectionURL + UserService.usersServiceUrl + '/signup';
    this.http.post(url, pUser, {headers: environment.header, observe: 'response'}).subscribe(value => {
      console.log(value);
    });
  }

}
