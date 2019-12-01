import {User} from './user';

export class Post {

  public id: number;
  public title: string;
  public contentText: string;
  public introduction: string;
  public imageId: number;
  public author: User;

}
