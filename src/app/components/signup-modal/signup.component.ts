import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html'})
export class SignupComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
