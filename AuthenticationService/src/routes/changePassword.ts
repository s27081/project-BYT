import express, { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

import { RequestValidationError } from "../errors/request-validation-error";
import { BadRequestError } from "../errors/bad-request-error";

import { Password } from "../authorization/passwordManager";
import { updateUser, findUserByEmail } from "../models/user";

const router = express.Router();

router.post(
  "/api/users/changePassword",
  [
    body("oldPassword")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password Must be provided and min 8 characters")
      .matches(/\d/)
      .withMessage("Must contain at least one digit")
      .matches(/[A-Z]/)
      .withMessage("Must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Must contain at least one lowercase letter")
      .matches(/[!@#$%^&*]/)
      .withMessage("Must contain at least one special character"),
    body("password")
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage("Password Must be provided and min 8 characters")
      .matches(/\d/)
      .withMessage("Must contain at least one digit")
      .matches(/[A-Z]/)
      .withMessage("Must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Must contain at least one lowercase letter")
      .matches(/[!@#$%^&*]/)
      .withMessage("Must contain at least one special character"),
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return next(new RequestValidationError(errors.array()));
    }

    const { oldPassword, password, currentUser } = req.body;

    const existingUser = await findUserByEmail(currentUser.email);
    if (existingUser === null) {
      return next(new BadRequestError("Bad Request Error"));
    } else {
      const passwordMatch = await Password.comparePassword(
        oldPassword,
        existingUser.password
      );
      if (!passwordMatch) {
        return next(new BadRequestError("Bad Request Error"));
      } else {
        const { id, email } = existingUser;
        const user = await updateUser(id, email, password);
        res.status(200).send(user);
      }
    }
  }
);

export { router as changePasswordRouter };
