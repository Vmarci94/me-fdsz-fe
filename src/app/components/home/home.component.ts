import {Component, OnInit} from '@angular/core';
import {MyModalsService} from '../../services/my-modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalsService: MyModalsService) {
  }

  ngOnInit() {
  }

}
