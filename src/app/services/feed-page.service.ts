import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FeedPost} from '../model/feed-post';

const URL_GET_ALL_FEEDS = '/feeds/get-all';
const URL_ADD_NEW_FEED = '/feeds/add';

@Injectable({
  providedIn: 'root'
})
export class FeedPageService {

  constructor(private http: HttpClient) {
  }

  public callGetAllPosts(): Observable<FeedPost[]> {
    const url = environment.connectionURL + URL_GET_ALL_FEEDS;
    return this.http.get<FeedPost[]>(url);
  }

  public callCreateNewFeedPostService(feedPost: FeedPost) {
    const url = environment.connectionURL + URL_ADD_NEW_FEED;

  }

  public uploadImage(file: File) {
    const fd = new FormData();
    fd.append('image', file, file.name);
    this.http.put(environment.connectionURL + '/image/add-new-image', fd)
      .subscribe(result =>
        console.log(result));
  }

}
