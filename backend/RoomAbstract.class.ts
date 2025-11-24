import { UserAbstract } from "./UserAbstract.class.ts";

export abstract class RoomAbstract {
  protected roomID: number;
  protected abstract userList: UserAbstract[];

  constructor() {
    this.roomID = this.generateRoomID();
  }

  abstract generateRoomID(): number;
}
