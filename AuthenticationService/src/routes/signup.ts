import express, { Request, Response} from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { addUser} from '../models/user';
import {pool} from '../DB/database'
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
], (req: Request, res: Response) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    const {email, password} = req.body;
    const existingUser = findUserByEmail(email);

    async function findUserByEmail(email: string) {
        try {
          const query = 'SELECT * FROM users WHERE email = $1;';
        
          const result = await pool.query(query, [email]);
        
          if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]);
            throw new BadRequestError("This Email Has been used");
          } else {
            console.log('No user found with this email.');
            return null;
          }
        } catch (err) {
          console.error('Error querying the database:', err);
          throw err;
    }

  }
  const user = addUser({ email, password});
  res.status(201).send(user);
})

export {router as signupRouter};