export class User {

  public title: string;
  public firstName: string;
  public secoundName: string;
  public fullName: string;

  public birthDay: Date;
  public phoneNumber: string;
  public location: string;

  public email: string;
  public username: string;
  public password: string;
  public role: string;
  public imageId: number;
  public id: number;
  public admin: boolean;

  constructor() {
    this.title = '';
    this.firstName = '';
    this.secoundName = '';
    this.fullName = '';
    this.birthDay = new Date();
  }

}
