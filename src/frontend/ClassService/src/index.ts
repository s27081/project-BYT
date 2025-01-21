import express from "express";
import { json } from "body-parser";

import { addGroupRouter } from "./routes/addGroup";
import { joinGroupRouter } from "./routes/joinGroup";
import { testDatabaseConnection } from "./DB/database";
import { showUserGroups } from "./routes/showYourGroups";
import { showUsersInGroup } from "./routes/showUsersInGroup";
import { deleteUserFromGroup } from "./routes/deleteUserFromGroup";
import cors from "cors";

const app = express();

app.use(json());

app.use(
  cors({
    origin: process.env.URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(addGroupRouter);
app.use(joinGroupRouter);
app.use(showUserGroups);
app.use(showUsersInGroup);
app.use(deleteUserFromGroup);

testDatabaseConnection()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });

app.listen(3002, () => {
  console.log("listen on port 3002");
});
