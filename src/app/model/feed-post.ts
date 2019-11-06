import {User} from './user';

export class FeedPost {
  id: number;
  title: string;
  contentText: string;
  introductionText: string;
  image: string;
  imageUrl: string | ArrayBuffer;
  author: User;

}
