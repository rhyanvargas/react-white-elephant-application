import {
  JwtService,
  JwtTokens,
} from "../../../../shared/http/authorization/jwtservice";
import { Email } from "../../domain/email";
import { Password } from "../../domain/password";
import { IUserRepo } from "../../repositories/userRepo";
import { LoginDTO } from "./LoginDTO";

export class Login {
  userRepo: IUserRepo;
  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  public async execute(dto: LoginDTO): Promise<JwtTokens | Error> {
    const emailOrError = Email.create({ value: dto.email });
    const passwordOrError = Password.create({
      value: dto.password,
      isHashed: false,
    });

    if (passwordOrError instanceof Error) return passwordOrError;
    if (emailOrError instanceof Error) return emailOrError;

    const userOrError = await this.userRepo.getUserByEmail(emailOrError);

    if (userOrError instanceof Error) return userOrError;

    if (
      userOrError.props.password.compareHashPassword(
        passwordOrError.props.value
      ) &&
      userOrError.props.id?.props.uuid
    )
      return JwtService.issueNewToken(userOrError.props.id.props.uuid);

    return Error("Incorrect Password");
  }
}
