import { Email } from "./email";
import { Password } from "./password";
import { UserId } from "./userId";

export interface UserProps {
  id?: UserId;
  email: Email;
  password: Password;
}
export class User {
  props: UserProps;
  private constructor(props: UserProps) {
    this.props = props;
  }

  public static create(props: UserProps): User {
    if (!props.email || !props.password)
      throw new Error("Incomplete Deets for User");
    return new User(props);
  }
}
