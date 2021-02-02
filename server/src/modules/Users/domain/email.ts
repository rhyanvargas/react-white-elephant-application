import { throws } from "assert";

export interface EmailProps {
  value: string;
}
export class Email {
  props: EmailProps;
  private constructor(props: EmailProps) {
    this.props = props;
  }

  private static isValidEmail(email: string): boolean {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  public static create(props: EmailProps): Email | Error {
    if (!props.value) throw new Error("Email is Empty");
    if (!this.isValidEmail(props.value)) return new Error("Email is not valid");

    return new Email(props);
  }
}
