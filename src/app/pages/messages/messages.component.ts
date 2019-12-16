import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {Message} from '../../model/message';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {consoleTestResultHandler} from 'tslint/lib/test';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  private messages: Message[];
  private user: User;
  private newMessage: string;

  constructor(private messagesService: MessagesService, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    if (this.userId) {
      this.messagesService.callGetMessagesToUser(this.userId).subscribe((data) => {
        this.messages = data;
      });
      this.userService.callGetUserById(this.userId).subscribe((data) => {
        this.user = data;
        console.log(data);
      });
    } else {
      this.messagesService.callGetMessagesToCurrentUser().subscribe((data) => {
        this.messages = data;
      });
    }
  }

  get userId(): number {
    return +this.route.snapshot.paramMap.get('userId');
  }

  private sendMessage() {
    const message = new Message();
    message.message = this.newMessage;
    if (this.userId) {
      message.reciever = {id: this.user.id} as User;
    }

    this.messagesService.callPostMessage(message).subscribe(() => {
      message.myMessage = true;
      this.messages.push(message);
      this.newMessage = '';
    });
  }
}
