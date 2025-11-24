import { Room } from "../Room.class.ts";
import { RoomManager } from "../RoomManager.class.ts";
import { User } from "../User.class.ts";

const room1: Room = RoomManager.createRoom();
const user1: User = RoomManager.createUser("Josua");
RoomManager.moveUser(user1, room1);


