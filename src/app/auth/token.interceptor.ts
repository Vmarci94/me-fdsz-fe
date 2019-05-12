import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LocalStorageService} from '../services/local-storage.service';
import 'rxjs-compat/add/operator/do';

@Injectable({providedIn: 'root'})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {
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
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          // do error handling here
          debugger;
          this.localStorageService.deleteToken();
          console.log('hiba van!');
        }
      }
    );
  }


}
