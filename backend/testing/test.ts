import { Room } from "../Room.class.ts";
import { RoomManager } from "../RoomManager.class.ts";
import { User } from "../User.class.ts";
import { View } from "../View.class.ts";

const room1: Room = RoomManager.createRoom();
const user1: User = RoomManager.createUser("Josua");

const user2: User = RoomManager.createUser("Peter");
const room2: Room = RoomManager.createRoom();
const user3: User = RoomManager.createUser("Ernst");
const user4: User = RoomManager.createUser("Dieter");

RoomManager.moveUser(user1, room1);

RoomManager.moveUser(user2, room1);
RoomManager.moveUser(user3, room1);
RoomManager.moveUser(user4, room1);

View.logAllRooms();

RoomManager.moveUser(user3, room2);

RoomManager.moveUser(user4, room2);

View.logAllRooms();

console.log(JSON.stringify(RoomManager.getRoomList()));
