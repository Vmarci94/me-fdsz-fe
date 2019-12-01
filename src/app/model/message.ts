import {User} from './user';

export class Message {
  createdDate: string;
  message: string;
  readed: string;
  reciever: User;
  sender: User;
  myMessage: boolean;
}
