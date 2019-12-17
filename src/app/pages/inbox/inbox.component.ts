import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {InboxItem} from '../../model/inbox-item';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  private inbox: Observable<InboxItem[]>;

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
    this.inbox = this.messagesService.callGetInBox();
  }

}
