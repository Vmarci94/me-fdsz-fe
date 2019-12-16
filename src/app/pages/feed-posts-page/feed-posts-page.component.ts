import {AfterViewInit, Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post';
import {MyModalService} from '../../services/my-modal.service';

@Component({
  selector: 'app-feed-posts-page',
  templateUrl: './feed-posts-page.component.html',
  styleUrls: ['./feed-posts-page.component.scss']
})
export class FeedPostsPageComponent implements OnInit, AfterViewInit {

  private postList: Post[];
  private selectedFile: File;

  constructor(private postService: PostService, private myModalService: MyModalService) {
  }

  ngOnInit() {
    this.myModalService.loadingStart();
    this.postService.callGetAllPosts();
    this.postService.emitAllPosts().subscribe((data) => {
      this.postList = data;
    });

  }

  private getPostRelativeLink(post: Post): string {
    return '/feed/' + post.id;
  }

  ngAfterViewInit(): void {
    this.postService.emitAllPosts().subscribe((data) => {
      this.myModalService.loadingStop();
    });
  }

}
