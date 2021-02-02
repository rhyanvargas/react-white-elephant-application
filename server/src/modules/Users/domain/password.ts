import { throws } from "assert";
import * as bcrypt from "bcrypt";

export interface PasswordProps {
  value: string;
  isHashed: boolean;
}

export class Password {
  props: PasswordProps;
  public static ROUNDS: number = 10;
  private constructor(props: PasswordProps) {
    this.props = props;
  }

  private static validatePassword(value: string): boolean {
    return value.length > 8;
  }

  public isPasswordHashed(): boolean {
    return this.props.isHashed;
  }

  public getHashPassword(): string {
    if (this.isPasswordHashed()) return this.props.value;
    return bcrypt.hashSync(this.props.value, Password.ROUNDS);
  }

  public compareHashPassword(plaintextPassword: string): boolean {
    return bcrypt.compareSync(plaintextPassword, this.props.value);
  }

  public static create(props: PasswordProps): Password | Error {
    if (!props.value) throw new Error("Password is Empty");
    if (!this.validatePassword(props.value))
      throw new Error("Password is not valid");

    return new Password(props);
  }
}
