import axios from "axios";
import { UserCommand } from "../models/UserCommand";

export class BotService {
  private API_URL = "https://localhost:5001/api";

  sendCommand(userCommand: UserCommand) {
    return axios.post<string>(`${this.API_URL}/rakata`, {
      ...userCommand
    })
  }
}