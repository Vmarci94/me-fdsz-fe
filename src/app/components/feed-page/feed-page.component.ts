import {Component, OnInit} from '@angular/core';
import {FeedPageService} from '../../services/feed-page.service';
import {FeedPost} from '../../model/feed-post';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  constructor(private feedPageService: FeedPageService) {
  }

  private feedPostList: FeedPost[];

  ngOnInit() {
    // this.feedPageService.callTest().subscribe(value => console.log(value));
    this.feedPageService.callGetAllPosts().subscribe(feedPostList => {
      this.feedPostList = feedPostList;
    });
  }

}
