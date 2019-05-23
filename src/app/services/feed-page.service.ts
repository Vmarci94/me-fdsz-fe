import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FeedPost} from '../model/feed-post';

@Injectable({
  providedIn: 'root'
})
export class FeedPageService {

  private static readonly feedServiceUrl: string = '/feeds';

  constructor(private http: HttpClient) {
  }

  public callGetAllPosts(): Observable<FeedPost[]> {
    const url = environment.connectionURL + FeedPageService.feedServiceUrl + '/get-all';
    return this.http.get<FeedPost[]>(url);
  }


}
