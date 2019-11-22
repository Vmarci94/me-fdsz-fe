import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {LocalStorageService} from '../services/local-storage.service';
import 'rxjs-compat/add/operator/do';
import {MyModalService} from '../services/my-modal.service';

@Injectable({providedIn: 'root'})
export class TokenInteceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService,
              private myModalService: MyModalService) {
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
      (errCode: HttpErrorResponse) => this.errorHandler(errCode)
    );
  }

  private errorHandler(errCode: HttpErrorResponse) {
    switch (errCode.status) {
      case 401: {
        this.myModalService.showAuthErrorModal();
        break;
      }
    }
  }

}
