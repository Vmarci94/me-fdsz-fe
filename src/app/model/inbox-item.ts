import {User} from './user';

export class InboxItem {
  public sender: User;
  public incommindDate: Date;
  public topMessage: string;
  public readed: string;
}
