import {Component, ElementRef, OnInit} from '@angular/core';
import {MyModalsService} from '../../services/my-modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef, private modalsService: MyModalsService) {
  }

  ngOnInit() {
    const video = this.elementRef.nativeElement.getElementsByTagName('video').item(0);
    video.muted = true;
    video.play();
  }

}
