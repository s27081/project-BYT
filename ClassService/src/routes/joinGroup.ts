import express from "express";
import {
  findGroupByJoinCode,
  addUserToGroup,
  isUserInGroup,
} from "../models/group";

const router = express.Router();

router.post("/api/group/joinGroup", async (req, res) => {
  try {
    const { currentUser, join_code } = req.body;
    const user_id = currentUser.id;
    const group = await findGroupByJoinCode(join_code);

    console.log(group);
    if (group === null) {
      res.status(400).send({ error: "Bad Request Error" });
    } else {
      const group_id = group.id.toString();
      const isMember = await isUserInGroup(group_id, user_id);
      if (isMember) {
        res.status(400).send({ error: "User is already in group" });
      } else {
        const UserAdded = await addUserToGroup({
          user_id,
          group_id,
          role: "member",
        });
        res.status(201).send({ group, UserAdded });
      }
    }
  } catch (error: any) {
    res.status(400).send({ error: "Bad Request Error" });
  }
});

export { router as joinGroupRouter };
