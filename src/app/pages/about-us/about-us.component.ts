import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';
import {PostService} from '../../services/post.service';
import {MainPageService} from '../../services/main-page.service';
import {Main} from '../../model/main';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  private main: Observable<Main>;

  constructor(private postService: PostService,
              private mainPageService: MainPageService) {
  }

  ngOnInit() {
    this.main = this.mainPageService.callGetMainpage();
  }

}
