export abstract class UserAbstract {
  protected userName: string;
  protected userID: number;
  //abstract room;

  constructor(userName: string) {
    this.userID = this.generateUserID();
    this.userName = userName;
  }

  abstract generateUserID(): number;

  setUserName(newName: string): void {
    this.userName = newName;
  }

  getUserName(): string {
    return this.userName;
  }
}
