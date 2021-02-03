import { Email } from "../domain/email";
import { User } from "../domain/user";

export interface IUserRepo {
  getUserByEmail(email: Email): Promise<User | Error>;
}
