import express, { Request, Response } from "express";
import { getUsersInGroup } from "../models/showGroup";

const router = express.Router();

router.get(
  "/api/group/showUsersInGroup",
  async (req: Request, res: Response) => {
    try {
      const joinCode = req.query.join_code as string;
      if (!joinCode) {
        res.status(400).send({ error: "joinCode is required" });
      }
      const join_code = joinCode;
      const UserInGroup = await getUsersInGroup(join_code);

      res.status(200).send({ UserInGroup });
    } catch (error: any) {
      res.status(500).send({ error: "Bad Request Error" });
    }
  }
);

export { router as showUsersInGroup };
