import {Component, OnInit} from '@angular/core';
import {MainPageService} from '../../../services/main-page.service';
import {Main} from '../../../model/main';
import {Highlight} from '../../../model/highlight';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../model/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private mainPageContent: Main;
  private videoSlide: Highlight = {
    title: 'Video title',
    introduction: 'video text',
    contentText: '',
    imageId: undefined,
    isVideo: true,
    id: undefined
  };

  constructor(
    private mainPageService: MainPageService,
    private postService: PostService
  ) {
  }

  ngOnInit() {
    this.mainPageService.callGetMainpage().subscribe((data) => {
      this.mainPageContent = data;

      this.mainPageContent.highlightList = [this.videoSlide].concat(data.highlightList);
    });
  }

  private getPostRelativeLink(id: number): string {
    return '/feed/' + id;
  }

}
