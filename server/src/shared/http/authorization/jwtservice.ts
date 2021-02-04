import { stringify } from "uuid";
import jsonwebtoken from "jsonwebtoken";

export type JwtTokens = {
  refreshToken?: string;
  accessToken?: string;
};

export class JwtService {
  public static issueNewToken(userId: string): JwtTokens {
    const accessToken = jsonwebtoken.sign(
      { id: userId },
      process.env.SECRET || "",
      {
        expiresIn: "1h",
      }
    );

    const refreshToken = jsonwebtoken.sign(
      { id: userId },
      process.env.SECRET || "",
      {
        expiresIn: "1d",
      }
    );

    return {
      refreshToken,
      accessToken,
    };
  }

  public static verifyToken(token: JwtTokens): JwtTokens | Error {
    let decodedToken: any;
    try {
      decodedToken = jsonwebtoken.verify(
        token.refreshToken || "",
        process.env.SECRET || ""
      ) as any;
    } catch (err) {
      return err;
    }

    return JwtService.issueNewToken(decodedToken.id);
  }
}
