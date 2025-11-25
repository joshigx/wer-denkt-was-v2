import { Room } from "./Room.class.ts";
import { User } from "./User.class.ts";

export class RoomManager {
  private static roomList: Room[] = [Room.lobby];

  constructor() {}

  public static getRoomList(): Room[] {
    return RoomManager.roomList;
  }

  //returns the Room of the user, if it exists, otherwise null
  public static findRoomOf(user: User): Room | null {
    for (let i = 0; i < RoomManager.roomList.length; i++) {
      const room = RoomManager.roomList[i];
      const index = room.getUserIndexOf(user);
      if (index !== -1) {
        return room;
      }
    }
    return null;
  }

  public static moveUser(user: User, targetRoom: Room) {
    if (targetRoom.getUserIndexOf(user) !== -1) {
      return; 
    }


    RoomManager.findRoomOf(user)?.removeUser(user);
    //adding to targetRoot
    targetRoom.addUser(user);
  }

  public static kickUser(user: User) {
    if (Room.lobby) {
      RoomManager.moveUser(user, Room.lobby);
    }
  }

  public static createRoom(): Room {
    const ret: Room = new Room();
    RoomManager.roomList.push(ret);
    return ret;
  }

  public static createUser(name: string): User {
    const ret: User = new User(name);
    Room.lobby.addUser(ret);
    return ret;
  }
}
