import {Component, OnInit} from '@angular/core';
import {FeedService} from '../../services/feed.service';
import {FeedPost} from '../../model/feed-post';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss']
})
export class FeedPageComponent implements OnInit {

  constructor(private feedService: FeedService) {
  }

  private feedPostList: Observable<FeedPost[]>;
  private selectedFile: File;

  ngOnInit() {
    this.feedPostList = this.feedService.callGetAllPosts();
  }


  private onUpload() {
    if (this.selectedFile) {
      this.feedService.uploadImage(this.selectedFile);
    } else {
      console.error('nincs kiválasztott file');
    }
  }

}
