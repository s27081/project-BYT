import { pool } from "../DB/database";
import { Password } from "../authorization/passwordManager";
import { BadRequestError } from "../errors/bad-request-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";
interface User {
  email: string;
  password: string;
}

export const addUser = async (
  user: User
): Promise<{ id: number; email: string }> => {
  const { email, password } = user;
  const hashedPassword = await Password.hashPassword(password);
  try {
    const query = `
        INSERT INTO users (email, password)
        VALUES ($1, $2)
        RETURNING id, email;
      `;
    const values = [email, hashedPassword];

    const result = await pool.query(query, values);

    return await result.rows[0];
  } catch (err) {
    console.error("Error adding user:", err);
    throw new BadRequestError("Bad Request");
  }
};
export function findUserByEmail(
  email: string
): Promise<{ id: number; email: string; password: string } | null> {
  return new Promise(async (resolve, reject) => {
    try {
      const query = "SELECT * FROM users WHERE email = $1;";

      const result = await pool.query(query, [email]);

      if (result.rows.length > 0) {
        resolve(result.rows[0]);
      } else {
        resolve(null);
      }
    } catch (err) {
      reject(new DatabaseConnectionError());
    }
  });
}
