import { User } from "@prisma/client";

export type UserJWTPayload = Omit<User, "password">;