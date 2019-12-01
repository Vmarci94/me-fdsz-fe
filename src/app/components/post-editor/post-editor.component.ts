import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Post} from '../../model/post';
import {PostService} from '../../services/post.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit, OnChanges {

  @Input()
  private postData: Post;
  private oldPostData: Post;

  private image: File;

  private editor = ClassicEditor;
  private checkboxFlag = false;
  private editorModel = {
    editorData: ''
  };

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.checkContentText();
  }

  ngOnChanges() {
    this.oldPostData = Object.assign({}, this.postData);
    this.checkContentText();
  }

  private toggleCheckbox() {
    this.checkboxFlag = !this.checkboxFlag;
    if (!this.checkboxFlag) {
      delete this.postData.contentText;
    }
  }

  private saveAndUpload() {
    // this.postData.contentText = this.editorModel.editorData;
    if (this.postData.id) {
      this.postService.callUpdatePost(this.postData, this.image);
    } else {
      this.postService.callSaveNewFeedPost(this.postData, this.image);
    }
  }


  onImageLoad(image) {
    this.image = image;
  }

  formTouched(): boolean {
    return JSON.stringify(this.postData) !== JSON.stringify(this.oldPostData);
  }

  cancel() {
    this.postData = Object.assign({}, this.oldPostData);
  }

  delete() {
    this.postService.callDeletePostById(this.postData.id);
    this.postData = undefined;
  }

  checkContentText() {
    this.checkboxFlag = !!this.postData.contentText;
  }

}
