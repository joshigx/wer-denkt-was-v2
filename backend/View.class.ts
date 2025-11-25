import { RoomManager } from "./RoomManager.class.ts";

export class View {
  constructor() {
  }

  public static logAllRooms() {
    RoomManager.getRoomList().forEach((element) => {
      console.log(`In Raum: ${element.getRoomID()} sind folgende Nutzer:`);

      element.getUserList().forEach((element) => {
        console.log(`  ID:      ${element.getUserID()}`);
        console.log(`  Name:    ${element.getUserName()} \n`);
      });
    });
  }

  public static getRoomOverviewJSON() {
    RoomManager.getRoomList().forEach((element) => {
     const myJSON = JSON.stringify(element)
    });
  }
}
