import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';

@Component({
  selector: 'app-feed-posts-page',
  templateUrl: './feed-posts-page.component.html',
  styleUrls: ['./feed-posts-page.component.scss']
})
export class FeedPostsPageComponent implements OnInit {

  private postList: Observable<Post[]>;
  private selectedFile: File;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postList = this.postService.callGetAllPosts();
  }

}
