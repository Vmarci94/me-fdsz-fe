import {Component, Input, OnInit} from '@angular/core';
import {FeedPost} from '../../../model/feed-post';

@Component({
  selector: 'app-feed-post',
  templateUrl: './feed-post.component.html'
})
export class FeedPostComponent implements OnInit {

  constructor() { }

  @Input()
  public feedPost: FeedPost;

  ngOnInit() {
  }

}
