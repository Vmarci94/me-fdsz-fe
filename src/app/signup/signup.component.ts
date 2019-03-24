import {Component, Input, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {UserService} from '../service/user.service';
import {User} from '../model/user.dto';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

  public user: User = new User();

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  register() {
    this.userService.callRegister(this.user)
      .subscribe(currentUser => this.user = currentUser);
  }

}
