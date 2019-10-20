import {Component, OnInit} from '@angular/core';
import {FeedPost} from '../../model/feed-post';
import {FeedPageService} from '../../services/feed-page.service';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.scss']
})
export class NewFeedComponent implements OnInit {

  private feedPostDTO = {} as FeedPost;
  private readonly imagePlaceholder = 'https://via.placeholder.com/300x200';
  private selectedFile: File;
  private imageUrl: string | ArrayBuffer = this.imagePlaceholder;

  constructor(private feedPageService: FeedPageService) {
  }

  ngOnInit() {
  }

  private onFileSelected(event: Event) {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.files.length === 1) {
      const currentFile: File = target.files.item(0);
      if (currentFile.type.match(/image\/*/) != null) {
        const fileReader: FileReader = new FileReader();
        this.selectedFile = currentFile;
        fileReader.readAsDataURL(currentFile);
        fileReader.onload = (e) => {
          this.imageUrl = fileReader.result;
        };
      } else {
        console.warn('Csak képet lehet feltölteni!');
      }
    } else {
      console.error('Hiba a fájl feltöltésénél!');
    }

  }

}
