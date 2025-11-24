import { Room } from "./Room.class.ts";
import { UserAbstract } from "./UserAbstract.class.ts";

export class User extends UserAbstract {
  private static userCount: number = 0;
  private room: Room = Room.lobby;

  constructor(userName: string) {
    super(userName);
  }

  
  override generateUserID(): number {
    User.userCount++;
    return User.userCount;
  }

  public getRoom(): Room {
    return this.room;
  }

  public setRoom(room: Room) {
    this.room = room;    

  }



  private setID(userID: number): boolean {
    this.userID = userID;
    return true;
  }

  getUserID(): number {
    return this.userID;
  }


}
