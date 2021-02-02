import { Email } from "../../domain/email";
import { Password } from "../../domain/password";

export class Login {
  userRepo: UserRepo;
  jwtService: JwtService;
  constructor(userRepo: UserRepo, jwtService: JwtService) {
    this.userRepo = userRepo;
    this.jwtService = jwtService;
  }

  public execute(dto: loginDTO): JwtTokens {
    const emailOrError = Email.create(dto.email);
    const passwordOrError = Password.create(dto.Password);
  }
}
