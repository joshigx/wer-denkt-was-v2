import { RoomManager } from "./RoomManager.class.ts";

export class View {
  constructor() {
  }

  public static showAllRooms() {
    RoomManager.getRoomList().forEach((element) => {
      console.log(`In Raum: ${element.getRoomID()} sind folgende Nutzer:`);

      element.getUserList().forEach((element) => {
        console.log(`  ID:      ${element.getUserID()}`);
        console.log(`  Name:    ${element.getUserName()} \n`);
      });
    });
  }
}
