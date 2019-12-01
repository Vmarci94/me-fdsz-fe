import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  private readonly imagePlaceholder = 'https://via.placeholder.com/800x518';

  private selectedFile: File;

  @Output()
  private imageLoaded: EventEmitter<File> = new EventEmitter<File>();

  @Input()
  private imageUrl: string | ArrayBuffer = this.imagePlaceholder;

  @Input()
  private disabled = false;

  private readonly newImageMaxWidth = 300;
  private readonly newImageMaxHeight = 300;

  constructor() {
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

        this.imageLoaded.emit(this.selectedFile);
      } else {
        console.warn('Csak képet lehet feltölteni!');
      }
    } else {
      console.error('Hiba a fájl feltöltésénél!');
    }

  }

}
