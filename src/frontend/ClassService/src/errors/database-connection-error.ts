export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "Error Connecting to Database";

  constructor() {
    super("Error Connecting to Database");
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
