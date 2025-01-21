import express, { Request, Response } from "express";
import { deleteUserFromGroup } from "../models/showGroup";

const router = express.Router();

router.delete("/api/group/deleteUser", async (req: Request, res: Response) => {
  try {
    const { userId, groupId } = req.body;

    if (!userId || !groupId) {
      res.status(400).json({ error: "User ID and Group ID are required" });
    }
    await deleteUserFromGroup(userId, groupId);
    res
      .status(200)
      .json({ success: true, message: "User removed from the group" });
  } catch (error) {
    console.error("Error removing user from group:", error);
    res.status(500).json({ error: "Failed to remove user from group" });
  }
});

export { router as deleteUserFromGroup };
