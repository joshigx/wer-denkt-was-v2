import { Room } from "./Room.class.ts";
import { User } from "./User.class.ts";

export class RoomManager {
  private static roomList: Room[] = [];

  constructor() {}

  public static getRoomList(): Room[] {
    //verhindert, dass man mit getRoomList, die eigentliche Liste verändert
    return RoomManager.roomList.slice();
  }

  //returns the Room of the user, if it exists, otherwise null
  public static findRoomOf(user: User): Room | null {
    let searchedRoom: Room | null = null;

    function callbackfn(room: Room) {
      if (room.getUserIndexOf(user) !== -1) {
        searchedRoom = room;
      }

      else  {
      searchedRoom = null;
    }


    }
    RoomManager.getRoomList().forEach(callbackfn)

    return searchedRoom;

  }

  public static moveUser(user: User, targetRoom: Room) {
    //save original room object
    const originRoom: Room | null = user.getRoom();

    if (originRoom === targetRoom) {
      return;
    }

    //test if user is already in this room
    if (
      (originRoom !== targetRoom) &&
      (targetRoom.getUserIndexOf(user) === -1)
    ) {
      //removes from orginRoom
      if (originRoom) {
        originRoom.removeUser(user);
      }

      //adding to targetRoot
      targetRoom.addUser(user);
    }
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
    return new User(name);
  }
}
