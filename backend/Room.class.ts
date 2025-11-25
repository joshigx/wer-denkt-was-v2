import { RoomAbstract } from "./RoomAbstract.class.ts";
import { RoomManager } from "./RoomManager.class.ts";
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

  private setRoomID() {
    console.log("You are not allowed to set roomNumber manually");
  }

  public getRoomID(): number {
    return this.roomID;
  }

  private setUserList(userList: User[]): boolean {
    this.userList = userList;

    return true;
  }
  public getUserList(): User[] {
    return this.userList;
  }

  //returns index auf an user in a room, if not existing: -1
  public getUserIndexOf(user: User): number {
    //creates callback to find user, if existing
    const findCallback = (element: User) =>
      element.getUserID() === user.getUserID();

    //searches this.userList with the defined search function
    const index: number = this.getUserList().findIndex(findCallback);

    //returns index if found or -1 if not
    return index;
  }

  public addUser(user: User) {
    if (this.getUserIndexOf(user) === -1) {
      this.userList.push(user);
    }
  }

  public removeUser(user: User) {
    const index = this.getUserIndexOf(user);

    if (index !== -1) {
      this.userList.splice(index, 1);
    }
  }
}
