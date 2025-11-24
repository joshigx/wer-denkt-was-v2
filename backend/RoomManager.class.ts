import { Room } from "./Room.class.ts";
import { User } from "./User.class.ts";

export class RoomManager {
  public static roomList: Room[] = [];

  constructor() {}

  public static getRoomList(): Room[] {

    //verhindert, dass man mit getRoomList, die eigentliche Liste verändert
    return RoomManager.roomList.slice();
  }

  public static moveUser(user: User, targetRoom: Room) {
    if (
      (user.getRoom() !== targetRoom) &&
      (RoomManager.hasUser(targetRoom, user) === -1)
    ) {
      //adds user to room
      const newList: User[] = targetRoom.getUserList().slice();
      newList.push(user);
      targetRoom.setUserList(newList);

      //adds room to user
      user.setRoom(targetRoom);
    }
  }

  public static kickUser(user: User) {
    RoomManager.moveUser(user, Room.lobby);
  }

  public static hasUser(room: Room, user: User): number {
    const find = (element: User) => element.getUserID() === user.getUserID();

    const index: number = room.getUserList().findIndex(find);
    return index;
  }

  public static createRoom(): Room {
    const ret: Room = new Room();
    RoomManager.roomList.push(ret);    
    return ret;
  }

  public static createUser(name: string): User {
    return new User(name);
  }
}
