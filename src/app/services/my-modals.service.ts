import {Injectable} from '@angular/core';
import {SigninComponent} from '../shared/module/modals/signin/signin.component';
import {SignupComponent} from '../shared/module/modals/signup/signup.component';
import {UserService} from './user.service';
import {InvalidTokenModalComponent} from '../shared/module/modals/invalid-token-modal/invalid-token-modal.component';
import {MDBModalService} from 'angular-bootstrap-md';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class MyModalsService {

  constructor(private modalService: MDBModalService, private userService: UserService) {
  }

  public openSigninModal() {
    const modalConfig = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: '',
      containerClass: '',
      animated: true
    };

    const modalRef = this.modalService.show(SigninComponent, modalConfig);

    modalRef.content.userAction.subscribe((user: User) => {
      this.userService.callSignin(user);
    });

  }

  public openSignupModal() {
    const modalConfig = {
      backdrop: 'static',
      keyboard: false,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: '',
      containerClass: '',
      animated: true
    };

    const modalRef = this.modalService.show(SignupComponent, modalConfig);

    modalRef.content.userAction.subscribe((user: User) => {
      this.userService.callSignup(user);
    });
  }

  public openInvalidTokenAlertModal() {
    const modalConfig = {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: false,
      class: '',
      containerClass: '',
      animated: true
    };

    const modalRef = this.modalService.show(InvalidTokenModalComponent, modalConfig);

    this.modalService.closed.subscribe((needSigninModal: boolean) => {
      if (needSigninModal) {
        this.openSigninModal();
      }
    });

  }

  openDefaultErrorModal() {

  }

  openInvalidRequestModal() {

  }
}
