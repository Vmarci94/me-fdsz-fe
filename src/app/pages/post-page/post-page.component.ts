import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';
import {MyModalService} from '../../services/my-modal.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit, AfterViewInit {

  private post: Observable<Post>;

  constructor(private postService: PostService, private route: ActivatedRoute, private myModalService: MyModalService) {
  }

  ngOnInit() {
    this.myModalService.loadingStart();
    this.post = this.postService.cellGetPostById(this.postId);
  }

  get postId(): number {
    return +this.route.snapshot.paramMap.get('postId');
  }

  ngAfterViewInit(): void {
    this.post.subscribe(value => this.myModalService.loadingStop())
  }

}
