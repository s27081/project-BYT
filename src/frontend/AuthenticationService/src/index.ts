import express from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/currentUser";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { signinRouter } from "./routes/signin";
import { changePasswordRouter } from "./routes/changePassword";
import { deleteUserRouter } from "./routes/deleteUser";

import { errorHandler } from "./middlewares/error-handler";
import { testDatabaseConnection } from "./DB/database";
import { NotFoundError } from "./errors/not-found-error";
import cors from "cors";

const app = express();

app.use(json());

app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:3001", "http://auth:3001","http://client:3000", "http://192.168.18.8:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Origin","Accept","Content-Type", "Authorization", "X-Requested-With"],
    credentials: true,
  })
);

app.use(cookieSession({ signed: false, secure: false, maxAge: 24 * 60 * 60 * 1000, domain: 'localhost',httpOnly: true}));

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log('Set-Cookie Header:', res.getHeader('Set-Cookie'));
  });
  next();
});


app.use(currentUserRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(signinRouter);
app.use(changePasswordRouter);
app.use(deleteUserRouter);

app.all("*", (req, res, next) => {
  next(new NotFoundError());
});

app.use(errorHandler);

testDatabaseConnection()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  });

app.listen(3001, () => {
  console.log("listen on port 3001");
});
