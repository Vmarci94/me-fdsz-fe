import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  constructor(private userService: UserService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    const token = this.localStorageService.getToken();
    if (token == null) {
      this.userService.callPreAuthToken().subscribe(currentToken => {
          console.log(currentToken.token);
          this.localStorageService.addToken(currentToken.token);
        }
      );
    }

  }

}
