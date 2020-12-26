import axios from "axios";
import { UserCommand } from "../models/UserCommand";
import BaseService from "./BaseService";

export class BotService extends BaseService {
  constructor() {
    super("rakata");
  }

  sendCommand(userCommand: UserCommand, userEmail: string) {
    return axios.post<string>(`${this.URL}`, {
      ...userCommand
    }, {
      headers: {
        "#email": userEmail
      }
    })
  }
}