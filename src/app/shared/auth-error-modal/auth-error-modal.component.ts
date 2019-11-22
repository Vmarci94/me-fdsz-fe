import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-auth-error-modal',
  templateUrl: './auth-error-modal.component.html',
  styleUrls: ['./auth-error-modal.component.scss']
})
export class AuthErrorModalComponent implements OnInit {

  private needSigninModal = new Subject<boolean>();

  constructor(public modalRef: MDBModalRef) {
  }

  ngOnInit() {
  }

  private hide(): void {
    this.modalRef.hide();
  }

  private signIn(): void {
    this.needSigninModal.next(true);
    this.hide();
  }

}
