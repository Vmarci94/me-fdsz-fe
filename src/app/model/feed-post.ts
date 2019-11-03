import {User} from './user';

export interface FeedPost {
  id: number;
  title: string;
  contentText: string;
  introductionText: string;
  image: File;
  author: User;
}
