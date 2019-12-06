import {Room} from './room';

export class Turnus {
  endDate: Date;
  id: number;
  rooms: Room[];
  startDate: Date;
  deletable: boolean;

  constructor() {
    this.endDate = new Date();
    this.startDate = new Date();
  }

}
