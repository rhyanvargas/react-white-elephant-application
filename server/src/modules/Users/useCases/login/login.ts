import { Email } from "../../domain/email";
import { Password } from "../../domain/password";
import { IUserRepo } from "../../repositories/userRepo";

export class Login {
  userRepo: IUserRepo;
  jwtService: JwtService;
  constructor(userRepo: IUserRepo, jwtService: JwtService) {
    this.userRepo = userRepo;
    this.jwtService = jwtService;
  }

  public async execute(dto: loginDTO): Promise<JwtTokens | Error> {
    const emailOrError = Email.create(dto.email);
    const passwordOrError = Password.create(dto.Password);

    if (passwordOrError instanceof Error) return passwordOrError;
    if (emailOrError instanceof Error) return emailOrError;

    const user = await this.userRepo.getUserByEmail(emailOrError);

    if (user.props.password.compareHashPassword(passwordOrError.value))
      return this.jwtService.generateTokens(user.props.id);

    return Error("Incorrect Password");
  }
}
