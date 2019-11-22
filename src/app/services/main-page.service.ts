import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../model/post';
import {environment} from '../../environments/environment';
import {Main} from '../model/main';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  private static readonly urlGetMainPage = '/main/main-page-info';

  constructor(private http: HttpClient) { }

  public callGetMainpage(): Observable<Main> {
    const url = environment.connectionURL + MainPageService.urlGetMainPage;
    return this.http.get<Main>(url);
  }
}
