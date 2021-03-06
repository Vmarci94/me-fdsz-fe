import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post';
import {PostService} from '../../services/post.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  private feedPostDTO = {} as Post;
  private readonly imagePlaceholder = 'https://via.placeholder.com/800x518';
  private selectedFile: File;
  private imageUrl: string | ArrayBuffer = this.imagePlaceholder;
  private Editor = ClassicEditor;
  private checkboxFlag = false;
  private editorModel = {
    editorData: '<p>Tudományosan fantasztikus publikáció helye!</p>'
  };

  private readonly newImageMaxWidth = 300;
  private readonly newImageMaxHeight = 300;

  constructor(private postService: PostService) {
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

        const img = new Image();
        img.src = URL.createObjectURL(this.selectedFile);
        img.onload = () => {
          const scale = Math.min((this.newImageMaxWidth / img.width), (this.newImageMaxHeight / img.height));
          const canvas = document.createElement('canvas');
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
          this.imageUrl = canvas.toDataURL();
        };

      } else {
        console.warn('Csak képet lehet feltölteni!');
      }
    } else {
      console.error('Hiba a fájl feltöltésénél!');
    }

  }

  private toggleCheckbox() {
    this.checkboxFlag = !this.checkboxFlag;
  }

  private saveAndUpload() {
    this.feedPostDTO.contentText = this.editorModel.editorData;
    this.postService.callSaveNewFeedPost(this.feedPostDTO, this.selectedFile);
  }


}
