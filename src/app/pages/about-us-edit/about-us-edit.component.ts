import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';
import {MainPageService} from '../../services/main-page.service';
import {Main} from '../../model/main';
import {main} from '@angular/compiler-cli/src/main';

@Component({
  selector: 'app-about-us-edit',
  templateUrl: './about-us-edit.component.html',
  styleUrls: ['./about-us-edit.component.scss']
})
export class AboutUsEditComponent implements OnInit {

  private mainDataPost: Main;
  private post: Post;

  constructor(private mainPageService: MainPageService) { }

  ngOnInit() {
    this.mainPageService.callGetMainpage().subscribe( (mainDTO: Main) => {
      this.mainDataPost = mainDTO;
      const post = new Post();
      post.id = -1;
      post.title = mainDTO.title;
      post.contentText = mainDTO.contentText;
      post.introduction = mainDTO.introduction;
      this.post = post;
    });

  }

  private update(): void {

  }
}
