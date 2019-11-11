import {Component, ElementRef, OnInit} from '@angular/core';
import {MyModalsService} from '../../../services/my-modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private elementRef: ElementRef, private modalsService: MyModalsService) {
  }

  ngOnInit() {
    const video = this.elementRef.nativeElement.getElementsByTagName('video').item(0);
    video.muted = true;
    video.play();
  }

}
