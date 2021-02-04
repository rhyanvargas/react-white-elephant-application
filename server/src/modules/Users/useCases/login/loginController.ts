import { Login } from "./login";

import * as express from "express";

export class LoginController {
  useCase: Login;
  constructor(useCase: Login) {
    this.useCase = useCase;
  }

  public async execute(req: express.Request, res: express.Response) {
    let email: string | undefined;
    let password: string | undefined;

    if ('email' in req.body) {
      email = req.body.email;
    
    }
    if ('password' in req.body) {
      password = req.body.password;
    }

    if (email === undefined || password === undefined) {
      return res.sendStatus(400);
    }

    // TODO: create error class to handle specific error cases
    const result = await this.useCase.execute({ email, password });

    if (result instanceof Error) return res.sendStatus(401);

    res.type("application/json");

    return res.sendStatus(200).json(result);
  }
}
