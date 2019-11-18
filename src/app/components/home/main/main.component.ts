import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MyModalsService} from '../../../services/my-modals.service';
import {FeedPost} from '../../../model/feed-post';
import {FeedService} from '../../../services/feed.service';
import {Observable} from 'rxjs';
import {HightlightFeed} from '../../../model/hightlight-feed';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  private selectedPost: FeedPost;
  private hightlightList = new Array<HightlightFeed>();

  private promoVideo = {
    mediaContentURL: 'assets/videos/me.mp4',
    introductionText: 'bevezető szöveg',
    title: 'Üdvözlünk'
  } as HightlightFeed;

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;
  @ViewChild('promoVideo', {static: false}) introVideoElement: ElementRef;

  private pauseOnHover = true;
  private unpauseOnArrow = false;
  private pauseOnIndicator = false;
  private paused = false;

  constructor(private modalsService: MyModalsService, private feedService: FeedService) {
  }

  ngOnInit() {
    this.hightlightList.push(this.promoVideo);
    this.feedService.callTopFeedPost(5)
      .map(postList => {
        return postList.map(post => {
          return {
            id: post.id,
            title: post.title,
            introductionText: post.introductionText,
            mediaContentURL: this.feedService.getImageUrlById(post.imageId)
          } as HightlightFeed;
        });
      })
      .subscribe(hightlightList => {
        hightlightList.forEach(hightlight => this.hightlightList.push(hightlight));
      });

  }

  private togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  private onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  ngAfterViewInit(): void {
    if (this.introVideoElement && this.introVideoElement.nativeElement) {
      const video: HTMLVideoElement = this.introVideoElement.nativeElement;
      video.muted = true;
      video.play();
    }
  }

}
