import {User} from './user';

export class FeedPost {

  constructor() {
  }

  id: number;
  title: string;
  contentText: string;
  imageSrc: string;
  author: User;

}
