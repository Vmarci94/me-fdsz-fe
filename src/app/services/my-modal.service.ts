import {Injectable} from '@angular/core';
import {MDBModalService} from 'angular-bootstrap-md';
import {SigninModalComponent} from '../shared/signin-modal/signin-modal.component';
import {User} from '../model/user';
import {SignupModalComponent} from '../shared/signup-modal/signup-modal.component';
import {UserService} from './user.service';
import {AuthErrorModalComponent} from '../shared/auth-error-modal/auth-error-modal.component';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyModalService {

  private static readonly minAnimationTime = 300; //in 1/1000s

  private loading = false;
  private lastStartTimeStamp: number;

  private eventChangeLoading: Subject<boolean> = new BehaviorSubject(false);

  constructor(private modalService: MDBModalService, private userService: UserService) {
  }

  public showSignInModal(): void {
    const modalRef = this.modalService.show(SigninModalComponent);
    modalRef.content.outUser.subscribe((user: User) => {
      // this.loadingStart();
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

  public emitLoadingChange(): Observable<boolean> {
    return this.eventChangeLoading.asObservable();
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

  public loadingStart(): void {
    if (!this.loading) {
      this.lastStartTimeStamp = (new Date()).getTime();
      this.eventChangeLoading.next(true);
      this.loading = true;
    }
  }

  public loadingStop(): void {
    // if (!this.errorState) {
    //   this.errorState = false;
    if (this.loading) {
      const timeStamp = (new Date()).getTime();
      setTimeout(() => {
        this.eventChangeLoading.next(false);
        this.loading = false;
      }, ((timeStamp - this.lastStartTimeStamp) < MyModalService.minAnimationTime) ? MyModalService.minAnimationTime : 0);
    }
    // }
  }

}
