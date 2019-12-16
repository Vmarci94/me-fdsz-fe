import {Component, OnInit} from '@angular/core';
import {MyModalService} from '../../services/my-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading = false;

  constructor(private myModalService: MyModalService) {
  }

  ngOnInit(): void {
    this.myModalService.emitLoadingChange().subscribe(state => {
      this.loading = state;
    });
  }

}
