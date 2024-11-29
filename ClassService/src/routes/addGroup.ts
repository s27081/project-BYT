import express, { Request, Response } from "express";
import { addGroup } from "../models/group";

const router = express.Router();

router.post("/api/group/addGroup", async (req: Request, res: Response) => {
  try {
    const { currentUser, name } = req.body;
    const admin_id = currentUser.id;
    const group = await addGroup({ admin_id, name });
    res.status(201).send({ group });
  } catch (error: any) {
    res.status(400).send({ error: "Bad Request Error" });
  }
});

export { router as addGroupRouter };
