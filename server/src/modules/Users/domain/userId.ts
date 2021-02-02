import { v4 as uuidv4 } from "uuid";

interface UserIdProps {
  uuid?: string;
}

export class UserId {
  props: UserIdProps;
  constructor(props: UserIdProps) {
    this.props = props;
  }

  public static create(props: UserIdProps): UserId {
    if (!props.uuid) props.uuid = uuidv4();
    return new UserId(props);
  }
}
