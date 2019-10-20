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
  private selectedFile: File;
  private newFeedPost = {} as FeedPost;

  ngOnInit() {
    this.feedPostList = this.feedPageService.callGetAllPosts();
  }

  private onFileSelected(htmlInputElement: HTMLInputElement) {
    if (htmlInputElement && htmlInputElement.files.length === 1) {
      this.selectedFile = htmlInputElement.files.item(0);
    } else {
      console.error('nem megfelelő file input!');
    }
  }

  private onUpload() {
    if (this.selectedFile) {
      this.feedPageService.uploadImage(this.selectedFile);
    } else {
      console.error('nincs kiválasztott file');
    }
  }

}
