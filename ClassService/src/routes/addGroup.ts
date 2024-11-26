import express from "express";

const router = express.Router();

router.post("/api/group/addGroup", (req, res) => {
  res.send({});
});

export { router as addGroupRouter };
