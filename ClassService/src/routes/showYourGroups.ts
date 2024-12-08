import express, { Request, Response } from "express";
import { getUserGroups } from "../models/showGroup";

const router = express.Router();

router.get("/api/group/showUserGroups", async (req: Request, res: Response) => {
  try {
    const { currentUser } = req.body;
    const user_id = parseInt(currentUser.id);
    const UserGroups = await getUserGroups(user_id);

    res.status(200).send({ UserGroups });
  } catch (error: any) {
    res.status(500).send({ error: "Bad Request Error" });
  }
});

export { router as showUserGroups };
