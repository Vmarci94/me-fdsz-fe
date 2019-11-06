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

  private feedPostList = new Array<FeedPost>();
  private selectedFile: File;
  private newFeedPost = {} as FeedPost;

  ngOnInit() {
    this.feedPageService.callGetAllPosts().subscribe(resultFeeds => {
      resultFeeds
        .filter(resultFeed => resultFeed.image && !resultFeed.imageUrl)
        .forEach(resultFeed => {
          const fr = new FileReader();
          fr.onload = () => {
            console.log(fr.result);
            resultFeed.imageUrl = fr.result;
          };
          fr.readAsDataURL(new Blob([resultFeed.image], {type: 'image/jpeg'}));
        });
      this.feedPostList = resultFeeds;
    });
  }

  private onUpload() {
    if (this.selectedFile) {
      this.feedPageService.uploadImage(this.selectedFile);
    } else {
      console.error('nincs kiválasztott file');
    }
  }

}
