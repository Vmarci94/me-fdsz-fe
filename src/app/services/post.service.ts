import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Post} from '../model/post';

const URL_ADD_NEW_POST = '/feeds/add';
const URL_UPDATE_POST = '/feeds/update';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private static readonly urlGetAllPosts = '/feeds/get-all';
  private static readonly urlAddNewPost = '/feeds/add';
  private static readonly urlGetTopLimitedPosts = '/feeds/get-top-posts';
  private static readonly urlDeletePost = '/feeds/delete/';

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

  public callSaveNewPost(post: Post, image: File) {
    const url = environment.connectionURL + PostService.urlAddNewPost;
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const tmpPost = {title: post.title, contentText: post.contentText, introductionText: post.introduction};
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
    return imageId || imageId >= 0 ? environment.connectionURL + /image/ + imageId : this.imagePlaceholder;
  }

  cellGetPostById(postId: number): Observable<Post> {
    const url = environment.connectionURL + '/feeds/' + postId;
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
    const url = environment.connectionURL + URL_ADD_NEW_POST;
    const fd = new FormData();
    if (image) {
      fd.append('image', image, image.name);
    }
    const tmpFeedPost = {title: feedPost.title, contentText: feedPost.contentText, introduction: feedPost.introduction};
    const blob = new Blob([JSON.stringify(tmpFeedPost)], {type: 'application/json'});
    fd.append('newFeedPost', blob);
    this.http.put(url, fd).subscribe(() => {
      this.callGetAllPosts();
    });
  }


  public callUpdatePost(feedPost: Post, image: File) {
    const url = environment.connectionURL + URL_UPDATE_POST;
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
    this.http.post(url, fd).subscribe(() => {
      this.callGetAllPosts();
    });
  }
}
