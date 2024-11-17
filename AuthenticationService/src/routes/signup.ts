import express, { Request, Response} from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import { RequestValidationError } from '../errors/request-validation-error';
import { addUser, findUserByEmail} from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';




const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Must be a valid email')
        .normalizeEmail()
        .isLength({max:50})
        .withMessage('Email must be under 50 characters'),
    body('password')
        .trim()
        .isLength({min:8, max:20})
        .withMessage("Password Must be provided and min 8 characters")
        .matches(/\d/)
        .withMessage("Must contain at least one digit")
        .matches(/[A-Z]/)
        .withMessage('Must contain at least one uppercase letter')
        .matches(/[a-z]/)
        .withMessage('Must contain at least one lowercase letter')
        .matches(/[!@#$%^&*]/)
        .withMessage('Must contain at least one special character'),
], async (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

  const {email, password} = req.body;

  const existingUser = await findUserByEmail(email);
    console.log(existingUser)
  if (existingUser !== null) {
    console.log('Email in use');
    throw new BadRequestError("This Email Has been used")
  }
  else{
    const user = await addUser({ email, password});
    //Generate JWT
    const userJwt = jwt.sign({
      id: user.id,
      email: user.email


    }, String(process.env.JWTKEY));
    req.session = {
      jwt: userJwt
    };
    res.status(201).send(user);
  }
})

export {router as signupRouter};