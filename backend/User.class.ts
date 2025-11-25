import { Room } from "./Room.class.ts";
import { RoomManager } from "./RoomManager.class.ts";
import { UserAbstract } from "./UserAbstract.class.ts";

export class User extends UserAbstract {
  private static userCount: number = 0;

  constructor(userName: string) {
    super(userName);
  }

  override generateUserID(): number {
    User.userCount++;
    return User.userCount;
  }

  public getRoom(): Room | null {
    return RoomManager.findRoomOf(this);

  }

  private setID(userID: number): boolean {
    this.userID = userID;
    return true;
  }

  getUserID(): number {
    return this.userID;
  }
}
