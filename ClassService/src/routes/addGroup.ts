import express, { Request, Response } from "express";
import { addGroup, addUserToGroup } from "../models/group";

const router = express.Router();

router.post("/api/group/addGroup", async (req: Request, res: Response) => {
  try {
    const { currentUser, name } = req.body;
    const user_id = currentUser.id;
    const group = await addGroup({ user_id, name });
    const group_id = group.id.toString();
    const UserAdded = await addUserToGroup({
      user_id,
      group_id,
      role: "admin",
    });

    res.status(201).send({ group, UserAdded });
  } catch (error: any) {
    res.status(400).send({ error: "Bad Request Error" });
  }
});

export { router as addGroupRouter };
