import {Injectable} from '@angular/core';
import {MDBModalService} from 'angular-bootstrap-md';
import {SigninModalComponent} from '../shared/signin-modal/signin-modal.component';
import {User} from '../model/user';
import {SignupModalComponent} from '../shared/signup-modal/signup-modal.component';
import {UserService} from './user.service';
import {AuthErrorModalComponent} from '../shared/auth-error-modal/auth-error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class MyModalService {


  constructor(private modalService: MDBModalService, private userService: UserService) {
  }

  public showSignInModal(): void {
    const modalRef = this.modalService.show(SigninModalComponent);
    modalRef.content.outUser.subscribe((user: User) => {
      this.userService.callSignin(user);
    });
    modalRef.content.needSignupModal.subscribe((flag: boolean) => {
      if (flag) {
        const config = {
          keyboard: true,
          focus: true,
          show: false,
          ignoreBackdropClick: false,
          // class: 'modal-side modal-top-right',
          // containerClass: 'right',
          animated: true
        };

        const signUpModalRef = this.modalService.show(SignupModalComponent, config);
        signUpModalRef.content.outUser.subscribe((user: User) => {
          this.userService.callSignup(user);
        });
      }
    });
  }

  public showAuthErrorModal(): void {
    this.userService.signout();
    const modalRef = this.modalService.show(AuthErrorModalComponent);
    modalRef.content.needSigninModal.subscribe((flag: boolean) => {
      if (flag) {
        this.showSignInModal();
      }
    });
  }

}
