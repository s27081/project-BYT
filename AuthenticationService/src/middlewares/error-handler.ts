import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeError() });
    return;
  }
  console.error(err);
  res.status(500).send({
    errors: [{ message: "Something went wrong" }],
  });
  return;
};