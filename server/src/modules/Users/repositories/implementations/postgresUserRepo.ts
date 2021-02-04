import { Email } from "../../domain/email";
import { User, UserProps } from "../../domain/user";
import { IUserRepo } from "../userRepo";
import { PrismaClient } from "@prisma/client";
import { Password } from "../../domain/password";

export class UserRepo implements IUserRepo {
  prismaClient: PrismaClient;
  constructor(prismaClient: PrismaClient) {
    this.prismaClient = prismaClient;
  }

  async getUserByEmail(email: Email): Promise<User | Error> {
    const user = await this.prismaClient.user.findUnique({
      where: {
        email: email.props.value,
      },
    });

    if (!user) return Error("No user found");

    const userPassword = Password.create({
      value: user.password,
      isHashed: true,
    });
    if (userPassword instanceof Error) return Error("Invalid Password");

    const userProps: UserProps = {
      email: email,
      password: userPassword,
    };

    return User.create(userProps);
  }
}
