import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Message} from '../model/message';
import {User} from '../model/user';
import {InboxItem} from '../model/inbox-item';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private static readonly urlGetMessagesToCurrentUser = '/messages/to-current-user';
  private static readonly urlGetMessagesToUser = '/messages/to-user';
  private static readonly urlPostNewMessage = '/messages/add';
  private static readonly urlGetInbox = '/messages/inbox';

  constructor(private http: HttpClient) { }

  public callGetMessagesToCurrentUser(): Observable<Message[]> {
    const url = environment.connectionURL + MessagesService.urlGetMessagesToCurrentUser;
    return this.http.get<Message[]>(url);
  }

  public callGetInBox(): Observable<InboxItem[]> {
    const url = environment.connectionURL + MessagesService.urlGetInbox;
    return this.http.get<InboxItem[]>(url);
  }

  public callGetMessagesToUser(userId: number): Observable<Message[]> {
    const url = environment.connectionURL + MessagesService.urlGetMessagesToUser;
    const queryParams = new HttpParams().set('userId', '' + userId);
    return this.http.get<Message[]>(url, {params: queryParams});
  }

  public callPostMessage(pMessage: Message): Observable<any> {
    const url = environment.connectionURL + MessagesService.urlPostNewMessage;
    return this.http.post<User>(url, pMessage, {headers: environment.header});
  }
}
