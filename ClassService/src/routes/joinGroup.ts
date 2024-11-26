import express from "express";

const router = express.Router();

router.post("/api/group/joinGroup", (req, res) => {
  res.send({});
});

export { router as joinGroupRouter };
