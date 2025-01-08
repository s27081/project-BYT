import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  reason = "bad Request Error";

  constructor(public message: string) {
    super(message);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}
