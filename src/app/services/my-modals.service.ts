import {Injectable} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {SigninComponent} from '../shared/modals/signin/signin.component';
import {SignupComponent} from '../shared/modals/signup/signup.component';
import {UserService} from './user.service';
import {InvalidTokenModalComponent} from '../shared/modals/invalid-token-modal/invalid-token-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MyModalsService {

  constructor(private modalService: NgbModal, private userService: UserService) {
  }

  public openSigninModal() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.result.then(user => {
      if (user != null) {
        this.userService.callSignin(user);
      } else {
        this.openSignupModal();
      }
    });
  }

  public openSignupModal() {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    const modalRef = this.modalService.open(SignupComponent, modalOptions);
    // modalRef.result.then(user => this.userService.callSignup(user));
  }

  public openInvalidTokenAlertModal() {
    const modalRef = this.modalService.open(InvalidTokenModalComponent).result.then(value => this.openSigninModal());
  }

  openDefaultErrorModal() {

  }

  openInvalidRequestModal() {

  }
}
