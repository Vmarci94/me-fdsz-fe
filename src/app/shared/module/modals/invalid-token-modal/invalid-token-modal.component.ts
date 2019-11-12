import {Component, OnInit} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-invalid-token-modal',
  templateUrl: './invalid-token-modal.component.html',
  styleUrls: ['./invalid-token-modal.component.scss']
})
export class InvalidTokenModalComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
  }

  onClosed(modalDirective: ModalDirective): boolean {
    console.log(modalDirective);
    return true;
  }
}
