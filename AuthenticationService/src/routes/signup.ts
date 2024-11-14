import express, { Request, Response} from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

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

    throw new DatabaseConnectionError();

    res.send({});

})

export {router as signupRouter};