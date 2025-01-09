import { CustomError } from "./custom-error";

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = "Error Connecting to Database";

  constructor() {
    super("Error Connecting to Database");
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
