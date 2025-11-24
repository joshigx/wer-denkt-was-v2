import { RoomAbstract } from "./RoomAbstract.class.ts";
import { User } from "./User.class.ts";

export class Room extends RoomAbstract {
  public static lobby: Room = new Room();
  private static roomCount: number = 0;
  protected override userList: User[] = [];

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

  private setRoomNumber() {
    console.log("You are not allowed to set roomNumber manually");
  }

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
}
