import { userRepo } from "../../repositories";
import { Login } from "./login";
import { LoginController } from "./loginController";

export const loginUseCase = new Login(userRepo);
export const loginController = new LoginController(loginUseCase);
