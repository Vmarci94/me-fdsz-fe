import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-invalid-token-modal',
  templateUrl: './invalid-token-modal.component.html',
  styleUrls: ['./invalid-token-modal.component.scss']
})
export class InvalidTokenModalComponent implements OnInit {


  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }


}
