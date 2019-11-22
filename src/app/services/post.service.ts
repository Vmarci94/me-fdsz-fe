import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private static readonly urlGetAllPosts = '/feeds/get-all';
  private static readonly urlAddNewPost = '/feeds/add';
  private static readonly urlGetTopLimitedPosts = '/feeds/get-top-posts';

  constructor(private http: HttpClient) {
  }

  public callGetAllPosts(): Observable<Post[]> {
    const url = environment.connectionURL + PostService.urlGetAllPosts;
    return this.http.get<Post[]>(url);
  }

  public callTopPost(limit: number): Observable<Post[]> {
    const url = environment.connectionURL + PostService.urlGetTopLimitedPosts;
    const queryParams = new HttpParams()
      .set('limit', '' + limit);
    return this.http.get<Post[]>(url, {params: queryParams});
  }

  public callSaveNewPost(post: Post, image: File) {
    const url = environment.connectionURL + PostService.urlAddNewPost;
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const tmpPost = {title: post.title, contentText: post.contentText, introductionText: post.introductionText};
    const blob = new Blob([JSON.stringify(tmpPost)], {type: 'application/json'});
    fd.append('newFeedPost', blob); // FIXME átnevezni newPost-ra
    this.http.put(url, fd).subscribe(value => console.log(value));
  }

  public uploadImage(file: File) {
    const fd = new FormData();
    fd.append('image', file, file.name);
    this.http.put(environment.connectionURL + '/image/add-new-image', fd)
      .subscribe(result =>
        console.log(result));
  }

  public getImageUrlById(imageId: number): string {
    return environment.connectionURL + /image/ + imageId;
  }

}
