import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismaConnection";
import { User } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed!",
    });
  }

  const { email, name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  const { hashedPassword: a, ...rest } = newUser;
  return res.status(200).json({
    user: rest,
  });
}
