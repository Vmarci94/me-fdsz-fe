import {User} from './user';

export class FeedPost {
  id: number;
  title: string;
  contentText: string;
  introductionText: string;
  image: Image;
  author: User;

}
