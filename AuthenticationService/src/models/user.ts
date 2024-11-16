import {pool} from '../DB/database'
import { Password } from '../authorization/password';
import { BadRequestError } from '../errors/bad-request-error';
interface User {
    email: string;
    password: string;
}

export const addUser = async(user: User): Promise<any> => {
    const {email, password} = user;
    const hashedPassword = await Password.hashPassword(password);
    try{
        const query = `
        INSERT INTO users (email, password)
        VALUES ($1, $2);
      `;
    const values = [email, hashedPassword];

    const result = await pool.query(query, values);
  } catch (err) {
    console.error('Error adding user:', err);
    throw new BadRequestError("Bad Request");
  }
};

  