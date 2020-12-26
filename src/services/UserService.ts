import axios from "axios";
import { AddUser, User } from "../models/User";

export class UserService {

  private URL = "https://localhost:5003/api";

  createAccount(newUser: AddUser) {
    return axios.post<User>(`${this.URL}/users`, {
      ...newUser
    })
  }

  fetchUserByEmail(email: string) {
    return axios.get<User>(`${this.URL}/users?email=${email}`)
  }
}