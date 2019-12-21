import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Post} from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private static readonly urlPostAPI = '/post';
  private static readonly urlUpdatePost = PostService.urlPostAPI + '/update';
  private static readonly urlGetAllPosts = PostService.urlPostAPI + '/get-all';
  private static readonly urlAddNewPost = PostService.urlPostAPI + '/add';
  private static readonly urlGetTopLimitedPosts = PostService.urlPostAPI + '/get-top-posts';
  private static readonly urlDeletePost = PostService.urlPostAPI + '/delete/';

  private readonly imagePlaceholder = 'https://via.placeholder.com/800x518';

  private eventChangeAllPosts: Subject<Post[]> = new Subject();

  constructor(private http: HttpClient) {
  }


  public emitAllPosts(): Observable<Post[]> {
    return this.eventChangeAllPosts.asObservable();
  }

  public callGetAllPosts() {
    const url = environment.connectionURL + PostService.urlGetAllPosts;
    this.http.get<Post[]>(url).subscribe((data) => {
      this.eventChangeAllPosts.next(data);
    });
  }

  public callTopPost(limit: number): Observable<Post[]> {
    const url = environment.connectionURL + PostService.urlGetTopLimitedPosts;
    const queryParams = new HttpParams()
      .set('limit', '' + limit);
    return this.http.get<Post[]>(url, {params: queryParams});
  }

  public getImageUrlById(imageId: number): string {
    if (imageId || imageId === 0) {
      return environment.connectionURL + /image/ + imageId;
    } else {
      return this.imagePlaceholder;
    }
  }

  cellGetPostById(postId: number): Observable<Post> {
    const url = environment.connectionURL + PostService.urlPostAPI + '/' + postId;
    // const options = {params: new HttpParams().set('postId', postId + '')};
    return this.http.get<Post>(url);
  }

  callDeletePostById(postId: number) {
    const url = environment.connectionURL + PostService.urlDeletePost + postId;
    this.http.delete(url).subscribe(() => {
      this.callGetAllPosts();
    });
  }

  public callSaveNewFeedPost(feedPost: Post, image: File) {
    const url = environment.connectionURL + PostService.urlAddNewPost;
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const tmpFeedPost = {
      title: feedPost.title, contentText: feedPost.contentText, introduction: feedPost.introduction};
    const blob = new Blob([JSON.stringify(tmpFeedPost)], {type: 'application/json'});
    fd.append('newFeedPost', blob);
    this.http.put(url, fd).subscribe(() => {
      this.callGetAllPosts();
    });
  }


  public callUpdatePost(feedPost: Post, image: File): Observable<any> {
    const url = environment.connectionURL + PostService.urlUpdatePost;
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const tmpFeedPost = {
      id: feedPost.id,
      title: feedPost.title,
      contentText: feedPost.contentText,
      introduction: feedPost.introduction,
      imageId: image ? null : feedPost.imageId,
      author: feedPost.author
    };
    const blob = new Blob([JSON.stringify(tmpFeedPost)], {type: 'application/json'});
    fd.append('newFeedPost', blob);
    return this.http.post<any>(url, fd);
  }
}
