import express from "express";
import { json } from "body-parser";

import { currentUserRouter } from "./routes/currentUser";
import { signupRouter } from "./routes/signup";
import { signoutRouter } from "./routes/signout";
import { signinRouter } from "./routes/signin";
import { errorHandler } from "./middlewares/error-handler";



const app = express();
app.use(json());
app.use(currentUserRouter);
app.use(signupRouter);
app.use(signoutRouter);
app.use(signinRouter);

app.all('*', (req, res) => {
    res.status(404).send({ errors: [{ message: 'Route not found' }] });
});

app.use(errorHandler);

app.listen(3000,()=> {
    console.log("listen on port 3000");
})