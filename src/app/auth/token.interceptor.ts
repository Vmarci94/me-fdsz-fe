import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';
import 'rxjs-compat/add/operator/do';
import {MyModalsService} from '../services/my-modals.service';
import {UserService} from '../services/user.service';

@Injectable({providedIn: 'root'})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService,
              private modalsService: MyModalsService,
              private userService: UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.localStorageService.getToken();
    if (token != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).do(
      (event: HttpEvent<any>) => {
      },
      (err: HttpErrorResponse) => {
        // do error handling
        switch (err.status) {
          case 401: {
            this.userService.signout();
            this.modalsService.openInvalidTokenAlertModal();
            break;
          }
          case 202: {
            this.modalsService.openInvalidRequestModal();
            break;
          }
          default: {
            this.modalsService.openDefaultErrorModal();
          }
        }
      }
    );
  }

}
