import {User} from './user';
import {Room} from './room';
import {Turnus} from './turnus';

export class Booking {
  author: User;
  guests: User[];
  numberOfNights: number;
  roomList: Room[];
  turnusDTO: Turnus;
  id: number;
}
