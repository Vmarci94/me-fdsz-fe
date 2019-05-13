import {Injectable} from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {SigninComponent} from '../shared/module/modals/signin/signin.component';
import {SignupComponent} from '../shared/module/modals/signup/signup.component';
import {UserService} from './user.service';
import {InvalidTokenModalComponent} from '../shared/module/modals/invalid-token-modal/invalid-token-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MyModalsService {

  constructor(private modalService: NgbModal, private userService: UserService) {
  }

  public openSigninModal() {
    const modalRef = this.modalService.open(SigninComponent);
    modalRef.result.then(user => this.userService.callSignin(user));
  }

  public openSignupModal() {
    const modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false
    };
    const modalRef = this.modalService.open(SignupComponent, modalOptions);
    modalRef.result.then(user => this.userService.callSignup(user));
  }

  public openInvalidTokenAlertModal() {
    const modalRef = this.modalService.open(InvalidTokenModalComponent);
  }

}
