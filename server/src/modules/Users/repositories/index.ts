import { PrismaClient } from "@prisma/client";
import { UserRepo } from "./implementations/postgresUserRepo";

const prismaClient = new PrismaClient();

export const userRepo = new UserRepo(prismaClient);
