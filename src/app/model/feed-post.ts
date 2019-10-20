import {User} from './user';

export interface FeedPost {
  id: number;
  title: string;
  contentText: string;
  image: File;
  author: User;
}
