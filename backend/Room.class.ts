import { RoomAbstract } from "./RoomAbstract.class.ts";
import { User } from "./User.class.ts";

export class Room extends RoomAbstract {
  public static lobby: Room = new Room();
  private static roomCount: number = 0;
  protected userList: User[] = [];

  constructor() {
    super();
  }

  /*
   * @override
   */

  override generateRoomID(): number {
    Room.roomCount++;
    return Room.roomCount;
  }

  
  private setRoomNumber() {}

  public getRoomNumber(): number {
    return this.roomID;
  }


  public setUserList(userList: User[]): boolean {
    this.userList = userList;

    return true;
  }
  public getUserList(): User[] {
    return this.userList;
  }

  public hasUser(user: User): number {
    //returns -1 for false, and for true the index of the user element in den userList
    const isInRoom: number = this.getUserList().findIndex((element) => {
      return element.getUserID() === user.getUserID();
    });

    return isInRoom;
  }
}
