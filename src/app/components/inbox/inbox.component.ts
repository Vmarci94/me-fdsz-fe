import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {InboxItem} from '../../model/inbox-item';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  private inbox: InboxItem[];

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.messagesService.callGetInBox().subscribe((data) => {
      this.inbox = data;
      console.log(data);
    });
  }

}
