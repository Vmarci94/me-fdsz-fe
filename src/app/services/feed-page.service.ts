import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FeedPost} from '../model/feed-post';
import * as _ from 'lodash';

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

  public callSaveNewFeedPost(feedPost: FeedPost, image: File) {
    const url = environment.connectionURL + URL_ADD_NEW_FEED;
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const tmpFeedPost = { title: feedPost.title, contentText: feedPost.contentText, introductionText: feedPost.introductionText };
    const blob = new Blob([JSON.stringify(tmpFeedPost)], {type: 'application/json'});
    fd.append('newFeedPost', blob);
    this.http.put(url, fd).subscribe(value => console.log(value));
  }

  public uploadImage(file: File) {
    const fd = new FormData();
    fd.append('image', file, file.name);
    this.http.put(environment.connectionURL + '/image/add-new-image', fd)
      .subscribe(result =>
        console.log(result));
  }

}
