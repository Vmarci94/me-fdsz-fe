import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../model/post';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.scss']
})
export class PostAdminComponent implements OnInit {
  private posts: Post[];
  private post = new Post();

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.callGetAllPosts();
    this.postService.emitAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  private loadPost(postId: number) {
    this.postService.cellGetPostById(postId).subscribe((data) => {
      this.post = data;
    });
  }

  private newPost() {
    this.post = new Post();
  }

}
