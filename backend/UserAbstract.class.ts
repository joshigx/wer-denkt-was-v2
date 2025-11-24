export abstract class UserAbstract {
  protected userName: string;
  protected userID: number;
  //abstract room;

  constructor(userName: string) {
    this.userName = userName;
    this.userID = this.generateUserID();
  }

  abstract generateUserID(): number;

  setUserName(newName: string): void {
    this.userName = newName;
  }

  getUserName(): string {
    return this.userName;
  }
}
