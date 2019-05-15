import {Component, OnInit} from '@angular/core';
import {FeedPageService} from '../../services/feed-page.service';
import {FeedPost} from '../../model/feed-post';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  constructor(private feedPageService: FeedPageService) {
  }

  private feedPostList: Observable<FeedPost[]>;

  ngOnInit() {
    this.feedPostList = this.feedPageService.callGetAllPosts();
  }

}
