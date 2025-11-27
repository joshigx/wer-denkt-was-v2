import { RoomManager } from "../models/RoomManager.class.ts";

export class View {
  constructor() {
  }

  public static logAllRooms() {
    console.log("\nAlle Räume: \n");

    RoomManager.getRoomList().forEach((element) => {
      console.log(`In Raum: ${element.getRoomID()} sind folgende Nutzer:`);

      element.getUserList().forEach((element) => {
        console.log(`  ID:      ${element.getUserID()}`);
        console.log(`  Name:    ${element.getUserName()} \n`);
      });
    });
  }

  public static getRoomOverviewJSON(): string | null {
    if (JSON.stringify(RoomManager.getRoomList())) {
      return JSON.stringify(RoomManager.getRoomList());
    }

    return null;
  }
}
